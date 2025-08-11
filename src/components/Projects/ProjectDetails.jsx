import { useParams, useNavigate } from 'react-router-dom';
import projects from './ProjectsData';

const projectDetailsContent = [
  {
    objectives: [
      'Deliver real-time Starlink user statistics and connectivity insights.',
      'Provide a visually engaging dashboard for both technical and non-technical users.',
      'Ensure seamless integration with live Starlink APIs.'
    ],
    scope: {
      included: [
        'Live Starlink user data tracking',
        'Interactive analytics dashboard',
        'User authentication and personalized views',
        'Mobile and desktop responsive design'
      ],
      excluded: [
        'Historical data archiving',
        'Offline access',
        'Third-party satellite providers'
      ]
    },
    tools: [
      'Flask', 'JavaScript', 'Chart.js', 'Firebase', 'HTML5', 'CSS3'
    ],
    process: [
      'Agile sprints for rapid prototyping and feedback.',
      'API research and integration with Starlink endpoints.',
      'UI/UX wireframing and iterative design.',
      'Testing and deployment on cloud platforms.'
    ],
    features: [
      'Live user statistics with auto-refresh',
      'Interactive charts and graphs',
      'User login and personalized dashboards',
      'Mobile-friendly interface'
    ],
    challenges: [
      {
        issue: 'Unstable API endpoints from Starlink',
        solution: 'Implemented robust error handling and fallback data sources.'
      },
      {
        issue: 'Visualizing large data sets in real time',
        solution: 'Used Chart.js optimizations and data throttling.'
      }
    ]
  },
  {
    objectives: [
      'Automate bakery operations from order to invoice.',
      'Enhance customer experience with digital ordering.',
      'Reduce manual errors and streamline inventory.'
    ],
    scope: {
      included: [
        'Order management',
        'Inventory tracking',
        'Automated invoicing',
        'Customer portal'
      ],
      excluded: [
        'Third-party delivery integration',
        'Multi-location support (MVP phase)'
      ]
    },
    tools: [
      'Ruby on Rails', 'JavaScript', 'Tailwind CSS', 'PostgreSQL'
    ],
    process: [
      'Requirements gathering with bakery staff.',
      'Agile development with weekly demos.',
      'User acceptance testing and feedback loops.'
    ],
    features: [
      'End-to-end order automation',
      'Real-time inventory updates',
      'One-click invoice generation',
      'Customer order history'
    ],
    challenges: [
      {
        issue: 'Legacy systems integration',
        solution: 'Developed custom middleware for data migration.'
      },
      {
        issue: 'User adoption by non-technical staff',
        solution: 'Created simple, intuitive UI and provided training.'
      }
    ]
  },
  {
    objectives: [
      'Classify rice varieties using machine learning.',
      'Provide a mobile tool for farmers and researchers.',
      'Ensure high accuracy and fast image processing.'
    ],
    scope: {
      included: [
        'Image upload and analysis',
        'Variety classification results',
        'Mobile and desktop support'
      ],
      excluded: [
        'Offline ML inference',
        'Integration with government databases'
      ]
    },
    tools: [
      'TensorFlow', 'Keras', 'Flutter', 'Firebase'
    ],
    process: [
      'Data collection and labeling.',
      'Model training and validation.',
      'Flutter app development.',
      'User testing with farmers.'
    ],
    features: [
      'Instant rice variety detection',
      'User-friendly mobile interface',
      'Cloud-based ML processing',
      'Result history and export'
    ],
    challenges: [
      {
        issue: 'Limited labeled data',
        solution: 'Partnered with agricultural universities for data.'
      },
      {
        issue: 'Mobile performance constraints',
        solution: 'Optimized ML models for speed and size.'
      }
    ]
  },
  {
    objectives: [
      'Predict stock trends using AI.',
      'Empower users to make informed investment decisions.',
      'Deliver insights via a cross-platform mobile app.'
    ],
    scope: {
      included: [
        'Stock prediction models',
        'User portfolio tracking',
        'Push notifications for trends'
      ],
      excluded: [
        'Direct trading integration',
        'Historical data export'
      ]
    },
    tools: [
      'TensorFlow', 'Scikit-learn', 'Python', 'Flutter'
    ],
    process: [
      'Market research and requirements analysis.',
      'Model development and backtesting.',
      'Flutter app design and deployment.'
    ],
    features: [
      'AI-powered trend predictions',
      'Personalized investment insights',
      'Cross-platform notifications',
      'Secure user authentication'
    ],
    challenges: [
      {
        issue: 'Volatile market data',
        solution: 'Implemented real-time data feeds and model retraining.'
      },
      {
        issue: 'User trust in AI predictions',
        solution: 'Provided transparent model explanations and disclaimers.'
      }
    ]
  },
  {
    objectives: [
      'Visualize loan distribution and deprivation data.',
      'Enable data-driven policy decisions.',
      'Integrate multiple data sources into one dashboard.'
    ],
    scope: {
      included: [
        'Interactive Tableau dashboard',
        'GeoJSON region mapping',
        'Excel data integration'
      ],
      excluded: [
        'Real-time data updates',
        'User account management'
      ]
    },
    tools: [
      'Tableau', 'GeoJSON', 'Excel'
    ],
    process: [
      'Data gathering from public sources.',
      'Dashboard design in Tableau.',
      'GeoJSON mapping and integration.'
    ],
    features: [
      'Map-based analytics',
      'Custom region filters',
      'Downloadable reports',
      'Responsive dashboard design'
    ],
    challenges: [
      {
        issue: 'Data inconsistencies across sources',
        solution: 'Standardized and cleaned data before integration.'
      },
      {
        issue: 'Complex region mapping',
        solution: 'Used advanced GeoJSON features and custom scripts.'
      }
    ]
  },
  {
    objectives: [
      'Streamline child welfare case management.',
      'Digitize registration and tracking processes.',
      'Ensure data security and privacy.'
    ],
    scope: {
      included: [
        'Case registration',
        'Case tracking dashboard',
        'PDF report generation',
        'Secure data storage'
      ],
      excluded: [
        'Mobile app version (MVP phase)',
        'Integration with external agencies'
      ]
    },
    tools: [
      'Flask', 'MySQL', 'Jinja2', 'HTML/CSS', 'ReportLab'
    ],
    process: [
      'Stakeholder interviews and requirements.',
      'Backend and frontend co-development.',
      'Security audits and compliance checks.'
    ],
    features: [
      'End-to-end case management',
      'Automated PDF reports',
      'Role-based access control',
      'Real-time dashboard'
    ],
    challenges: [
      {
        issue: 'Sensitive data handling',
        solution: 'Implemented encryption and strict access controls.'
      },
      {
        issue: 'Generating complex PDF reports',
        solution: 'Used ReportLab for custom, dynamic PDFs.'
      }
    ]
  }
];

const gridBgStyle = {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(90deg, #010e2e 0%, #410109ff 100%)',
  position: 'relative',
  overflow: 'hidden',
};
const gridOverlayStyle = {
  content: '""',
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  backgroundImage:
    'linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px),\
     linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)',
  backgroundSize: '90px 90px',
  zIndex: 1,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[parseInt(id, 10)];
  const details = projectDetailsContent[parseInt(id, 10)];

  if (!project || !details) {
    return <div style={{ padding: '4rem', textAlign: 'center', color: '#cf142b' }}>Project not found.</div>;
  }

  return (
    <section style={gridBgStyle}>
      <div style={gridOverlayStyle}></div>
      <div style={{ background: '#fff', borderRadius: '28px', boxShadow: '0 8px 32px rgba(0,36,125,0.13)', maxWidth: 900, width: '100%', padding: '2.2rem 1.5rem', margin: '0 1rem', position: 'relative', zIndex: 2 }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: '#010e2e', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.2rem', cursor: 'pointer' }}>&larr; Back</button>
        <h1 style={{ color: '#cf142b', fontWeight: 800, fontSize: '2.1rem', marginBottom: '1.1rem', letterSpacing: '-1px' }}>{project.title}</h1>
        <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: 260, objectFit: 'cover', borderRadius: '18px', marginBottom: '1.2rem', boxShadow: '0 4px 24px rgba(0,36,125,0.10)' }} />
        <section style={{ marginBottom: '0.6rem' }}>
          <h2 style={{ color: '#010e2e', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.18rem' }}>Overview</h2>
          <p style={{ color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>{project.description}</p>
        </section>
        <section style={{ marginBottom: '0.6rem' }}>
          <h2 style={{ color: '#010e2e', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.18rem' }}>Objectives</h2>
          <ul style={{ color: '#222', fontSize: '1.03rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            {details.objectives.map((obj, i) => <li key={i} style={{ marginBottom: 4 }}>{obj}</li>)}
          </ul>
        </section>
        <section style={{ marginBottom: '0.6rem', display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h2 style={{ color: '#010e2e', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.18rem' }}>Scope</h2>
            <strong style={{ color: '#cf142b' }}>Included:</strong>
            <ul style={{ color: '#222', fontSize: '1.03rem', marginLeft: '1.2rem', marginBottom: 0 }}>
              {details.scope.included.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <strong style={{ color: '#cf142b', marginTop: 6, display: 'block' }}>Not Included:</strong>
            <ul style={{ color: '#888', fontSize: '1.03rem', marginLeft: '1.2rem', marginBottom: 0 }}>
              {details.scope.excluded.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h2 style={{ color: '#010e2e', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.18rem' }}>Tools & Technologies</h2>
            <ul style={{ color: '#222', fontSize: '1.03rem', marginLeft: '1.2rem', marginBottom: 0 }}>
              {details.tools.map((tool, i) => <li key={i}>{tool}</li>)}
            </ul>
          </div>
        </section>
        <section style={{ marginBottom: '0.6rem' }}>
          <h2 style={{ color: '#010e2e', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.18rem' }}>Process / Methodology</h2>
          <ul style={{ color: '#222', fontSize: '1.03rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            {details.process.map((step, i) => <li key={i}>{step}</li>)}
          </ul>
        </section>
        <section style={{ marginBottom: '0.6rem' }}>
          <h2 style={{ color: '#010e2e', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.18rem' }}>Features / Functionality</h2>
          <ul style={{ color: '#222', fontSize: '1.03rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            {details.features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
        </section>
        <section>
          <h2 style={{ color: '#010e2e', fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.18rem' }}>Challenges & Solutions</h2>
          <ul style={{ color: '#222', fontSize: '1.03rem', marginLeft: '1.2rem', marginBottom: 0 }}>
            {details.challenges.map((ch, i) => (
              <li key={i} style={{ marginBottom: 6 }}>
                <strong style={{ color: '#cf142b' }}>Challenge:</strong> {ch.issue}<br />
                <strong style={{ color: '#010e2e' }}>Solution:</strong> {ch.solution}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default ProjectDetails; 