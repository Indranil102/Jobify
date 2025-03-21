import express from 'express';
import Job from '../models/Job.js';
import roadMap from '../models/roadMap.js';
const router = express.Router();

router.get('/jobs/search', async (req, res) => {
  try {
    const { q, salaryRange, postingDate } = req.query;
    const searchQuery = {};

    // ✅ Global Search Across Multiple Fields
    if (q) {
      searchQuery.$or = [
        { 'Job Title': { $regex: q, $options: 'i' } }, // ❌ Wrong field name
        { 'Company Name': { $regex: q, $options: 'i' } }, // ❌ Wrong field name
        { Location: { $regex: q, $options: 'i' } }, // ❌ Wrong field name
        { 'Job Description': { $regex: q, $options: 'i' } },
        { 'Required Skills': { $regex: q, $options: 'i' } },
        { 'Experience Level': { $regex: q, $options: 'i' } },
        { 'Job Type': { $regex: q, $options: 'i' } }
      ];
    }

    // ✅ Salary Range Filter (if provided)
    if (salaryRange) {
      const [minSalary, maxSalary] = salaryRange.split('-').map(Number);
      searchQuery.salaryRange = {
        $gte: minSalary || 0,
        $lte: maxSalary || Infinity
      };
    }

    // ✅ Posting Date Filter (if provided)
    if (postingDate) {
      searchQuery.postingDate = { $gte: new Date(postingDate) };
    }

    console.log('Search Query:', searchQuery);

    // 👉 Perform search in MongoDB
    const jobs = await Job.find(searchQuery);

    res.status(200).json(jobs);
  } catch (error) {
    console.error('Search Error:', error);
    res.status(500).json({ error: error.message });
  }
});
router.get('/way/search', async (req, res) => {
  try {
    const { q } = req.query;
    var searchQuery = {};

    // ✅ Global Search Across Multiple Fields
    if (q) {
      searchQuery = 
        // { CareerPath : { $regex: q, $options: 'i' } }
        { CareerPath : q }
      ;
    }

  

    // 👉 Perform search in MongoDB
    const Map = await roadMap.find(searchQuery);
    console.log(Map);
    res.status(200).json(Map[0]);
  } catch (error) {
    console.error('Search Error:', error);
    res.status(500).json({ error: error.message });
  }
});
// ✅ Add a test route to add jobs (optional)
router.post('/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
