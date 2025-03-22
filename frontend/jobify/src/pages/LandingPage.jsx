import React, { useState } from 'react';

const LandingPage = () => {
  const jobData = [
    {
      "Company Name": "Deloitte",
      "Location": "Mumbai",
      "Job Title": "Business Analyst",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "18-25 LPA",
      "Posting Date": "29-09-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Chennai",
      "Job Title": "Data Analyst",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "10-10-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Byju's",
      "Location": "Gurgaon",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "23-12-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Bangalore",
      "Job Title": "Cloud Engineer",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "10-15 LPA",
      "Posting Date": "04-09-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Jaipur",
      "Job Title": "ML Engineer",
      "Required Skills": "Java, Spring Boot, Microservices",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "6-10 LPA",
      "Posting Date": "13-11-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Deloitte",
      "Location": "Mumbai",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "22-12-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Accenture",
      "Location": "Ahmedabad",
      "Job Title": "Cybersecurity Analyst",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "24-07-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Tata Consultancy Services",
      "Location": "Ahmedabad",
      "Job Title": "Software Engineer",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "4-6 LPA",
      "Posting Date": "14-12-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Mumbai",
      "Job Title": "Frontend Developer",
      "Required Skills": "HTML, CSS, JavaScript",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "18-25 LPA",
      "Posting Date": "06-01-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Oracle",
      "Location": "Coimbatore",
      "Job Title": "Cybersecurity Analyst",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "27-08-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Capgemini",
      "Location": "Nagpur",
      "Job Title": "Cloud Engineer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "4-6 LPA",
      "Posting Date": "09-08-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Swiggy",
      "Location": "Bangalore",
      "Job Title": "Frontend Developer",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "3-5 LPA",
      "Posting Date": "28-10-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Infosys",
      "Location": "Lucknow",
      "Job Title": "ML Engineer",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "16-10-2023",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Bhopal",
      "Job Title": "Data Analyst",
      "Required Skills": "SQL, Power BI, Excel",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "3-5 LPA",
      "Posting Date": "21-02-2023",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Deloitte",
      "Location": "Indore",
      "Job Title": "Software Engineer",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "20-30 LPA",
      "Posting Date": "09-03-2025",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Infosys",
      "Location": "Indore",
      "Job Title": "DevOps Engineer",
      "Required Skills": "Python, NLP, AI models",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "30-04-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Accenture",
      "Location": "Nagpur",
      "Job Title": "DevOps Engineer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "18-25 LPA",
      "Posting Date": "11-09-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Wipro",
      "Location": "Ahmedabad",
      "Job Title": "Software Engineer",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "24-05-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Cognizant",
      "Location": "Gurgaon",
      "Job Title": "DevOps Engineer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "5-8 LPA",
      "Posting Date": "02-01-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Swiggy",
      "Location": "Nagpur",
      "Job Title": "DevOps Engineer",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "18-25 LPA",
      "Posting Date": "01-11-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Tata Consultancy Services",
      "Location": "Lucknow",
      "Job Title": "Data Analyst",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "21-11-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Zomato",
      "Location": "Ahmedabad",
      "Job Title": "Data Analyst",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "10-15 LPA",
      "Posting Date": "28-10-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Amazon",
      "Location": "Gurgaon",
      "Job Title": "Data Analyst",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "20-30 LPA",
      "Posting Date": "31-05-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Tata Consultancy Services",
      "Location": "Kolkata",
      "Job Title": "Backend Developer",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "18-25 LPA",
      "Posting Date": "04-07-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Flipkart",
      "Location": "Chennai",
      "Job Title": "Software Engineer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "5-8 LPA",
      "Posting Date": "21-05-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Amazon",
      "Location": "Pune",
      "Job Title": "Frontend Developer",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "7-12 LPA",
      "Posting Date": "07-06-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "IBM",
      "Location": "Nagpur",
      "Job Title": "ML Engineer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "10-15 LPA",
      "Posting Date": "20-09-2024",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Paytm",
      "Location": "Gurgaon",
      "Job Title": "Frontend Developer",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "03-07-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Paytm",
      "Location": "Surat",
      "Job Title": "DevOps Engineer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "5-8 LPA",
      "Posting Date": "03-11-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Bhopal",
      "Job Title": "Cloud Engineer",
      "Required Skills": "Go, Kubernetes, Docker",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "20-30 LPA",
      "Posting Date": "27-03-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Zomato",
      "Location": "Ahmedabad",
      "Job Title": "Cloud Engineer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "4-6 LPA",
      "Posting Date": "02-11-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Mumbai",
      "Job Title": "Cloud Engineer",
      "Required Skills": "Node.js, Express, MongoDB",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "20-30 LPA",
      "Posting Date": "12-03-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Capgemini",
      "Location": "Surat",
      "Job Title": "Software Engineer",
      "Required Skills": "SQL, Power BI, Excel",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "3-5 LPA",
      "Posting Date": "01-08-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Amazon",
      "Location": "Lucknow",
      "Job Title": "Business Analyst",
      "Required Skills": "Python, NLP, AI models",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "29-12-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "IBM",
      "Location": "Mumbai",
      "Job Title": "Software Engineer",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "22-03-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Hyderabad",
      "Job Title": "Data Analyst",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "20-30 LPA",
      "Posting Date": "27-04-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Google",
      "Location": "Bangalore",
      "Job Title": "Cybersecurity Analyst",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "4-6 LPA",
      "Posting Date": "13-08-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Tech Mahindra",
      "Location": "Ahmedabad",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "16-02-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Accenture",
      "Location": "Surat",
      "Job Title": "Backend Developer",
      "Required Skills": "Java, Spring Boot, Microservices",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "20-30 LPA",
      "Posting Date": "13-10-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Amazon",
      "Location": "Chennai",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "24-09-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Microsoft",
      "Location": "Chennai",
      "Job Title": "DevOps Engineer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "15-20 LPA",
      "Posting Date": "24-05-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Microsoft",
      "Location": "Bangalore",
      "Job Title": "Product Manager",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "6-10 LPA",
      "Posting Date": "07-01-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Infosys",
      "Location": "Bangalore",
      "Job Title": "Cloud Engineer",
      "Required Skills": "HTML, CSS, JavaScript",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "5-8 LPA",
      "Posting Date": "25-12-2023",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Cognizant",
      "Location": "Ahmedabad",
      "Job Title": "Cybersecurity Analyst",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "10-15 LPA",
      "Posting Date": "17-12-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "IBM",
      "Location": "Lucknow",
      "Job Title": "Cloud Engineer",
      "Required Skills": "Node.js, Express, MongoDB",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "6-10 LPA",
      "Posting Date": "05-10-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Zomato",
      "Location": "Noida",
      "Job Title": "ML Engineer",
      "Required Skills": "Java, Spring Boot, Microservices",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "20-30 LPA",
      "Posting Date": "30-08-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Accenture",
      "Location": "Surat",
      "Job Title": "Data Analyst",
      "Required Skills": "Node.js, Express, MongoDB",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "7-12 LPA",
      "Posting Date": "14-01-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Tata Consultancy Services",
      "Location": "Indore",
      "Job Title": "Business Analyst",
      "Required Skills": "Python, NLP, AI models",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "18-25 LPA",
      "Posting Date": "12-08-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Deloitte",
      "Location": "Mumbai",
      "Job Title": "Software Engineer",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "7-12 LPA",
      "Posting Date": "02-10-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "IBM",
      "Location": "Hyderabad",
      "Job Title": "Cybersecurity Analyst",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "20-30 LPA",
      "Posting Date": "18-06-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Jaipur",
      "Job Title": "DevOps Engineer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "01-09-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Accenture",
      "Location": "Coimbatore",
      "Job Title": "Product Manager",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "20-11-2024",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Microsoft",
      "Location": "Bangalore",
      "Job Title": "Business Analyst",
      "Required Skills": "SQL, Power BI, Excel",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "6-10 LPA",
      "Posting Date": "26-12-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Amazon",
      "Location": "Gurgaon",
      "Job Title": "Frontend Developer",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "24-11-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Wipro",
      "Location": "Hyderabad",
      "Job Title": "Product Manager",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "4-6 LPA",
      "Posting Date": "02-11-2023",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Jaipur",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "16-11-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Nagpur",
      "Job Title": "Data Scientist",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "23-06-2023",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Wipro",
      "Location": "Jaipur",
      "Job Title": "ML Engineer",
      "Required Skills": "Go, Kubernetes, Docker",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "4-6 LPA",
      "Posting Date": "03-05-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Tech Mahindra",
      "Location": "Surat",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Go, Kubernetes, Docker",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "20-30 LPA",
      "Posting Date": "01-09-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Coimbatore",
      "Job Title": "Backend Developer",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "6-10 LPA",
      "Posting Date": "28-03-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Paytm",
      "Location": "Lucknow",
      "Job Title": "ML Engineer",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "5-8 LPA",
      "Posting Date": "13-02-2025",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Paytm",
      "Location": "Ahmedabad",
      "Job Title": "Frontend Developer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "3-5 LPA",
      "Posting Date": "14-08-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Byju's",
      "Location": "Surat",
      "Job Title": "Backend Developer",
      "Required Skills": "React, Node.js, SQL",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "10-12-2023",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Wipro",
      "Location": "Noida",
      "Job Title": "ML Engineer",
      "Required Skills": "SQL, Power BI, Excel",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "04-08-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "IBM",
      "Location": "Jaipur",
      "Job Title": "Frontend Developer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "4-6 LPA",
      "Posting Date": "02-12-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Microsoft",
      "Location": "Indore",
      "Job Title": "Business Analyst",
      "Required Skills": "Node.js, Express, MongoDB",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "5-8 LPA",
      "Posting Date": "11-03-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Byju's",
      "Location": "Bhopal",
      "Job Title": "Full Stack Developer",
      "Required Skills": "SQL, Excel, Data Visualization",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "01-07-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Zomato",
      "Location": "Noida",
      "Job Title": "Data Analyst",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "4-6 LPA",
      "Posting Date": "09-07-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Byju's",
      "Location": "Lucknow",
      "Job Title": "Full Stack Developer",
      "Required Skills": "Python, NLP, AI models",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "3-5 LPA",
      "Posting Date": "07-12-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Zomato",
      "Location": "Coimbatore",
      "Job Title": "Frontend Developer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "20-30 LPA",
      "Posting Date": "18-01-2025",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Cognizant",
      "Location": "Coimbatore",
      "Job Title": "Backend Developer",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "18-25 LPA",
      "Posting Date": "24-06-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Google",
      "Location": "Indore",
      "Job Title": "Product Manager",
      "Required Skills": "SQL, Power BI, Excel",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "7-12 LPA",
      "Posting Date": "09-01-2024",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Tata Consultancy Services",
      "Location": "Noida",
      "Job Title": "Backend Developer",
      "Required Skills": "Ruby on Rails, PostgreSQL",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "3-5 LPA",
      "Posting Date": "16-07-2023",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Lucknow",
      "Job Title": "Business Analyst",
      "Required Skills": "Node.js, Express, MongoDB",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "6-10 LPA",
      "Posting Date": "09-08-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Flipkart",
      "Location": "Nagpur",
      "Job Title": "Business Analyst",
      "Required Skills": "CI/CD, Jenkins, Kubernetes",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "3-5 LPA",
      "Posting Date": "11-01-2023",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Google",
      "Location": "Noida",
      "Job Title": "DevOps Engineer",
      "Required Skills": "AWS, Azure, Docker",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "6-10 LPA",
      "Posting Date": "26-03-2024",
      "Job Type": "Internship"
    },
    {
      "Company Name": "Oracle",
      "Location": "Gurgaon",
      "Job Title": "Business Analyst",
      "Required Skills": "Go, Kubernetes, Docker",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "20-30 LPA",
      "Posting Date": "29-04-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "Cognizant",
      "Location": "Hyderabad",
      "Job Title": "Software Engineer",
      "Required Skills": "Python, ML, TensorFlow",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "18-25 LPA",
      "Posting Date": "02-11-2024",
      "Job Type": "Part-time"
    },
    {
      "Company Name": "PhonePe",
      "Location": "Chennai",
      "Job Title": "ML Engineer",
      "Required Skills": "Java, Spring Boot, Microservices",
      "Job Description": "NA",
      "Experience Level": "Senior",
      "Salary Range": "18-25 LPA",
      "Posting Date": "20-09-2024",
      "Job Type": "Contract"
    },
    {
      "Company Name": "Accenture",
      "Location": "Chennai",
      "Job Title": "ML Engineer",
      "Required Skills": "Go, Kubernetes, Docker",
      "Job Description": "NA",
      "Experience Level": "Mid-level",
      "Salary Range": "5-8 LPA",
      "Posting Date": "23-05-2023",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Oracle",
      "Location": "Kolkata",
      "Job Title": "Software Engineer",
      "Required Skills": "Node.js, Express, MongoDB",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "15-20 LPA",
      "Posting Date": "22-02-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "Capgemini",
      "Location": "Chennai",
      "Job Title": "Backend Developer",
      "Required Skills": "Python, NLP, AI models",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "5-8 LPA",
      "Posting Date": "12-02-2024",
      "Job Type": "Full-time"
    },
    {
      "Company Name": "HCL Technologies",
      "Location": "Nagpur",
      "Job Title": "Backend Developer",
      "Required Skills": "SQL, Power BI, Excel",
      "Job Description": "NA",
      "Experience Level": "Entry-level",
      "Salary Range": "10-15 LPA",
      "Posting Date": "15-11-2024",
      "Job Type": "Part-time"
    }
  ];

  const [selectedButton, setSelectedButton] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobType, setSelectedJobType] = useState(null);

  // Filter jobs based on search query and selected job type
  const filteredJobs = jobData.filter((job) => {
    const matchesCompany = job["Company Name"]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Ensure Required Skills is always an array
    const skills = Array.isArray(job["Required Skills"])
      ? job["Required Skills"]
      : job["Required Skills"].split(', ').map((skill) => skill.trim());

    const matchesSkills = skills.some((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesJobType = selectedJobType ? job["Job Type"] === selectedJobType : true;
    return (matchesCompany || matchesSkills) && matchesJobType;
  });

  const handleJobTypeClick = (jobType) => {
    setSelectedJobType(selectedJobType === jobType ? null : jobType);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-4xl font-bold">Find your dream job now</h1>
        <p className="text-gray-600 mt-2">5 lakh+ jobs for you to explore</p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Enter skills / designations / companies"
            className="px-4 py-2 w-96 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setSelectedButton(1)}
          >
            Search
          </button>
        </div>
      </section>

      {/* Job Categories */}
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-50">
        {['Remote', 'MNC', 'Internship', 'Marketing', 'Data Science'].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              selectedJobType === type ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleJobTypeClick(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* No Results Message */}
      {filteredJobs.length === 0 && searchQuery !== "" && (
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold">No jobs found matching your search.</h2>
          <p className="text-gray-600 mt-2">Try different keywords or browse our featured jobs.</p>
        </div>
      )}

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto mt-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {searchQuery || selectedJobType ? 'Search Results' : 'Featured Jobs'}
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => {
              // Ensure Required Skills is always an array
              const skills = Array.isArray(job["Required Skills"])
                ? job["Required Skills"]
                : job["Required Skills"].split(', ').map((skill) => skill.trim());

              return (
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[400px]" key={index}>
                  <h2 className="text-xl font-bold mb-2">{job['Job Title']}</h2>
                  <p className="text-gray-600 mb-2 font-semibold">Company: {job['Company Name']}</p>
                  <p className="text-gray-600 mb-2 font-semibold">Salary: {job['Salary Range']}</p>
                  <p className="text-gray-600 mb-4 font-medium">Location: {job['Location']}</p>
                  <div className="mb-4">
                    <h3 className="mb-2 text-lg font-semibold">Required Skills:</h3>
                    <ul className="list-disc list-inside text-gray-700 flex flex-wrap gap-5">
                      {skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 ml-[115px]">
                    Apply Now
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;