const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve the issue preventing users from logging in",
        "date": "2025-08-27",
        "category": "Bug Fix",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend weekly project status meeting",
        "date": "2025-08-28",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write Unit Tests",
        "description": "Add unit tests for authentication module",
        "date": "2025-08-30",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Report",
        "description": "Monthly performance report for Q2",
        "date": "2025-08-29",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Perform full backup of user database",
        "date": "2025-08-27",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Research API",
        "description": "Explore options for payment gateway integration",
        "date": "2025-09-01",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix CSS Issues",
        "description": "Resolve broken layout on dashboard",
        "date": "2025-08-27",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Code Review",
        "description": "Review pull requests from frontend team",
        "date": "2025-08-28",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Presentation",
        "description": "Present product demo to client",
        "date": "2025-08-29",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize Queries",
        "description": "Improve performance of SQL queries",
        "date": "2025-09-02",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "UI Redesign",
        "description": "Redesign dashboard with new layout",
        "date": "2025-08-30",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy to Staging",
        "description": "Push the latest build to staging server",
        "date": "2025-08-28",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Triage",
        "description": "Check and prioritize incoming bug reports",
        "date": "2025-08-27",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Write Documentation",
        "description": "Update API usage documentation",
        "date": "2025-09-01",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Security Audit",
        "description": "Perform vulnerability scanning",
        "date": "2025-08-29",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Payment Bug",
        "description": "Resolve double charge issue",
        "date": "2025-08-27",
        "category": "Bug Fix",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Integration Testing",
        "description": "Run tests for new features",
        "date": "2025-09-02",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    console.log(employees, admin);
}