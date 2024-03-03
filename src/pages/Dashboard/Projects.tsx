
import { Table } from 'react-bootstrap'

// components
import { CustomCardPortlet } from '@/components'

// data
import { projects } from './data'

const Projects = () => {
    // Function to handle click on table row
    const handleRowClick = (projectId: number) => {
        // Redirect to a specific project page or perform other actions
        // Replace the URL with the correct one for your application
        window.location.href = `/project-details/${projectId}`;
    }

    return (
        <CustomCardPortlet cardTitle="Projects" titleClass="header-title">
            <Table hover responsive className="table-nowrap mb-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Assign</th>
                    </tr>
                </thead>
                <tbody>
                    {(projects || []).map((project, idx) => (
                        <tr key={idx} onClick={() => handleRowClick(project.id)} style={{ cursor: 'pointer' }}>
                            <td>{project.id}</td>
                            <td>{project.projectName}</td>
                            <td>01/01/2015</td> {/* Replace with project.startDate if available */}
                            <td>{project.dueDate}</td>
                            <td>
                                <span className={`badge bg-${project.variant}-subtle text-${project.variant}`}>
                                    {project.status}
                                </span>
                            </td>
                            <td>Techzaa Studio</td> {/* Replace with project.assign if available */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </CustomCardPortlet>
    )
}

export default Projects;