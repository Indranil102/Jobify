import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background: #1A3636;
  color: white;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: #4CAF50;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #264747;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  
  th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #4a6363;
  }
`;

// Chart Data
const skillsData = {
  labels: ['React', 'Node.js', 'Python', 'SQL', 'AWS', 'TypeScript', 'Docker'],
  datasets: [{
    label: 'Skill Level',
    data: [85, 75, 65, 70, 60, 80, 55],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#4CAF50'],
  }]
};

const applicationData = {
  labels: ['Applied', 'Interview', 'Rejected', 'Accepted'],
  datasets: [{
    label: 'Applications',
    data: [15, 5, 3, 2],
    backgroundColor: '#4CAF50',
  }]
};

const trendsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'ATS Score Trend',
      data: [75, 78, 80, 82, 85, 88],
      borderColor: '#4CAF50',
      tension: 0.4,
    },
    {
      label: 'Applications per Month',
      data: [5, 8, 12, 10, 15, 18],
      borderColor: '#FF6384',
      tension: 0.4,
    }
  ]
};

// Dashboard Component
export default function Dashboard() {
  const [applications, setApplications] = useState([
    { company: 'Google', position: 'Frontend Developer', status: 'Applied', date: '2024-01-15', atsScore: 85 },
    { company: 'Microsoft', position: 'Full Stack Engineer', status: 'Rejected', date: '2024-01-10', atsScore: 75 },
    { company: 'Amazon', position: 'Software Engineer', status: 'Interview', date: '2024-01-05', atsScore: 90 },
    { company: 'Meta', position: 'React Developer', status: 'Applied', date: '2024-01-02', atsScore: 82 },
    { company: 'Netflix', position: 'Senior Developer', status: 'Rejected', date: '2023-12-28', atsScore: 70 }
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [error, setError] = useState(null);

  const sortedApplications = [...applications].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const averageAtsScore = applications.reduce((acc, curr) => acc + curr.atsScore, 0) / applications.length;
  const successRate = (applications.filter(app => app.status === 'Accepted').length / applications.length) * 100;

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: 'top',
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      
      <Stats>
        <StatCard>
          <h3>Average ATS Score</h3>
          <h2>{averageAtsScore.toFixed(1)}%</h2>
        </StatCard>
        <StatCard>
          <h3>Total Applications</h3>
          <h2>{applications.length}</h2>
        </StatCard>
        <StatCard>
          <h3>Success Rate</h3>
          <h2>{successRate.toFixed(1)}%</h2>
        </StatCard>
      </Stats>

      <Grid>
        <Card>
          <h2>Skill Levels</h2>
          <Pie data={skillsData} options={chartOptions} />
        </Card>
        <Card>
          <h2>Application Status</h2>
          <Bar data={applicationData} options={chartOptions} />
        </Card>
        <Card>
          <h2>Progress Trends</h2>
          <Line data={trendsData} options={chartOptions} />
        </Card>
        <Card>
          <h2>Recent Applications</h2>
          <Table>
            <thead>
              <tr>
                <th onClick={() => requestSort('company')}>Company</th>
                <th onClick={() => requestSort('position')}>Position</th>
                <th onClick={() => requestSort('status')}>Status</th>
                <th onClick={() => requestSort('date')}>Date</th>
                <th onClick={() => requestSort('atsScore')}>ATS Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedApplications.map((app, i) => (
                <tr key={i}>
                  <td>{app.company}</td>
                  <td>{app.position}</td>
                  <td>{app.status}</td>
                  <td>{app.date}</td>
                  <td>{app.atsScore}%</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Grid>
    </Container>
  );
}