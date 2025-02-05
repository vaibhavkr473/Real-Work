import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Footer from "../../components/Footer";
import "./Resume.css";

const ResumeBuilder = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [skills, setSkills] = useState("");
    const [professionalSummary, setProfessionalSummary] = useState("");
    const [educationEntries, setEducationEntries] = useState([{ degree: "", branch: "", school: "", graduationDate: "" }]);
    const [projectEntries, setProjectEntries] = useState([{ title: "", description: "", technologies: "", link: "" }]);
    const [hasWorkExperience, setHasWorkExperience] = useState("no"); // "yes" or "no"
    const [experienceEntries, setExperienceEntries] = useState([{ jobTitle: "", company: "", jobDescription: "", joiningDate: "", endDate: "", currentlyWorking: false }]);
    const [resumePreview, setResumePreview] = useState("");

    const degrees = ["Matriculation", "Intermediate", "Graduation", "Masters"];

    const addEducationField = () => {
        setEducationEntries([...educationEntries, { degree: "", branch: "", school: "", graduationDate: "" }]);
    };

    const addProjectField = () => {
        setProjectEntries([...projectEntries, { title: "", description: "", technologies: "", link: "" }]);
    };

    const addExperienceField = () => {
        setExperienceEntries([...experienceEntries, { jobTitle: "", company: "", jobDescription: "", joiningDate: "", endDate: "", currentlyWorking: false }]);
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEntries = [...educationEntries];
        updatedEntries[index][field] = value;
        setEducationEntries(updatedEntries);
    };

    const handleProjectChange = (index, field, value) => {
        const updatedEntries = [...projectEntries];
        updatedEntries[index][field] = value;
        setProjectEntries(updatedEntries);
    };

    const handleExperienceChange = (index, field, value) => {
        const updatedEntries = [...experienceEntries];
        updatedEntries[index][field] = value;
        setExperienceEntries(updatedEntries);
    };

    const validateForm = () => {
        if (!fullName || !email || !phone || !professionalSummary || !skills) {
            alert("Please fill all required fields.");
            return false;
        }
        for (const entry of educationEntries) {
            if (!entry.degree || !entry.school || !entry.graduationDate) {
                alert("Please fill all education fields.");
                return false;
            }
            if ((entry.degree === "Graduation" || entry.degree === "Masters") && !entry.branch) {
                alert("Please fill the branch for Graduation or Masters.");
                return false;
            }
        }
        if (hasWorkExperience === "yes") {
            for (const entry of experienceEntries) {
                if (!entry.jobTitle || !entry.company || !entry.joiningDate || (!entry.currentlyWorking && !entry.endDate)) {
                    alert("Please fill all work experience fields.");
                    return false;
                }
            }
        }
        return true;
    };

    const previewResume = () => {
        if (!validateForm()) return;

        const educationHTML = educationEntries
            .map((entry) => `
                <p><strong>${entry.degree}${entry.branch ? ` (${entry.branch})` : ""}</strong></p>
                <p>${entry.school} - Graduated on ${entry.graduationDate}</p>
            `)
            .join("");

        const projectHTML = projectEntries
            .map(
                (entry) => `
                    <p><strong>${entry.title}</strong></p>
                    <p>${entry.description}</p>
                    <p><strong>Technologies:</strong> ${entry.technologies}</p>
                    <p><strong>Link:</strong> <a href="${entry.link}" target="_blank">${entry.link}</a></p>
                `
            )
            .join("");

        const experienceHTML = experienceEntries
            .map(
                (entry) => `
                    <p><strong>${entry.jobTitle}</strong> at ${entry.company}</p>
                    <p>${entry.joiningDate} - ${entry.currentlyWorking ? "Present" : entry.endDate}</p>
                    <p>${entry.jobDescription}</p>
                `
            )
            .join("");

        const resumeHTML = `
            <h2>${fullName}</h2>
            <p>${email} | ${phone}</p>
            <p><a href="${linkedin}" target="_blank">LinkedIn</a> | <a href="${github}" target="_blank">GitHub</a></p>
            <hr>
            <h3>Professional Summary</h3>
            <p>${professionalSummary}</p>
            <h3>Education</h3>
            ${educationHTML}
            <h3>Technical Skills</h3>
            <ul>${skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
            <h3>Projects</h3>
            ${projectHTML}
            ${hasWorkExperience === "yes" ? `<h3>Work Experience</h3>${experienceHTML}` : ""}
        `;

        setResumePreview(resumeHTML);
    };

    const downloadResume = () => {
        if (!validateForm()) return;

        const doc = new jsPDF();
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const resumeContent = document.querySelector(".preview-content").innerText;
        doc.text(resumeContent, 10, 10);
        doc.save("resume.pdf");
    };

    return (
        <>
            <section className="resume-builder">
                <h1>Resume Builder</h1>
                <p>Create a professional resume to showcase your technical skills, projects, and experience.</p>

                <div className="resume-form">
                    {/* Personal Details */}
                    <div className="form-section">
                        <h2>Personal Details</h2>
                        <div className="form-group">
                            <label htmlFor="full-name">Full Name</label>
                            <input type="text" id="full-name" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="linkedin">LinkedIn Profile</label>
                            <input type="url" id="linkedin" placeholder="Enter your LinkedIn profile URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="github">GitHub Profile</label>
                            <input type="url" id="github" placeholder="Enter your GitHub profile URL" value={github} onChange={(e) => setGithub(e.target.value)} />
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div className="form-section">
                        <h2>Professional Summary</h2>
                        <div className="form-group">
                            <label htmlFor="professional-summary">Describe yourself in 50-60 words</label>
                            <textarea id="professional-summary" placeholder="Enter your professional summary" value={professionalSummary} onChange={(e) => setProfessionalSummary(e.target.value)} required />
                        </div>
                    </div>

                    {/* Education */}
                    <div className="form-section">
                        <h2>Education</h2>
                        <div id="education-fields">
                            {educationEntries.map((entry, index) => (
                                <div className="education-entry" key={index}>
                                    <div className="form-group">
                                        <label htmlFor="degree">Degree</label>
                                        <select id="degree" value={entry.degree} onChange={(e) => handleEducationChange(index, "degree", e.target.value)} required>
                                            <option value="">Select Degree</option>
                                            {degrees.map((degree) => (
                                                <option key={degree} value={degree}>{degree}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {(entry.degree === "Graduation" || entry.degree === "Masters") && (
                                        <div className="form-group">
                                            <label htmlFor="branch">Branch</label>
                                            <input type="text" id="branch" placeholder="Enter your branch" value={entry.branch} onChange={(e) => handleEducationChange(index, "branch", e.target.value)} required />
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label htmlFor="school">School/University</label>
                                        <input type="text" id="school" placeholder="Enter your school/university" value={entry.school} onChange={(e) => handleEducationChange(index, "school", e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="graduation-date">Graduation Date</label>
                                        <input type="date" id="graduation-date" value={entry.graduationDate} onChange={(e) => handleEducationChange(index, "graduationDate", e.target.value)} required />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-add" onClick={addEducationField}>
                            Add Another Education
                        </button>
                    </div>

                    {/* Technical Skills */}
                    <div className="form-section">
                        <h2>Technical Skills</h2>
                        <div className="form-group">
                            <label htmlFor="skills">Add Skills (comma separated)</label>
                            <input type="text" id="skills" placeholder="e.g., Java, Python, React, Git" value={skills} onChange={(e) => setSkills(e.target.value)} required />
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="form-section">
                        <h2>Projects</h2>
                        <div id="project-fields">
                            {projectEntries.map((entry, index) => (
                                <div className="project-entry" key={index}>
                                    <div className="form-group">
                                        <label htmlFor="project-title">Project Title</label>
                                        <input type="text" id="project-title" placeholder="Enter project title" value={entry.title} onChange={(e) => handleProjectChange(index, "title", e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="project-description">Description</label>
                                        <textarea id="project-description" placeholder="Describe your project" value={entry.description} onChange={(e) => handleProjectChange(index, "description", e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="project-technologies">Technologies Used</label>
                                        <input type="text" id="project-technologies" placeholder="e.g., React, Node.js, MongoDB" value={entry.technologies} onChange={(e) => handleProjectChange(index, "technologies", e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="project-link">Project Link</label>
                                        <input type="url" id="project-link" placeholder="Enter project URL (if any)" value={entry.link} onChange={(e) => handleProjectChange(index, "link", e.target.value)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-add" onClick={addProjectField}>
                            Add Another Project
                        </button>
                    </div>

                    {/* Work Experience */}
                    <div className="form-section">
                        <h2>Work Experience</h2>
                        <div className="form-group radio-group">
                            <label>
                                <input type="radio" name="work-experience" value="yes" checked={hasWorkExperience === "yes"} onChange={() => setHasWorkExperience("yes")} /> Yes
                            </label>
                            <label>
                                <input type="radio" name="work-experience" value="no" checked={hasWorkExperience === "no"} onChange={() => setHasWorkExperience("no")} /> No
                            </label>
                        </div>
                        {hasWorkExperience === "yes" && (
                            <div id="experience-fields">
                                {experienceEntries.map((entry, index) => (
                                    <div className="experience-entry" key={index}>
                                        <div className="form-group">
                                            <label htmlFor="job-title">Job Title</label>
                                            <input type="text" id="job-title" placeholder="Enter your job title" value={entry.jobTitle} onChange={(e) => handleExperienceChange(index, "jobTitle", e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">Company</label>
                                            <input type="text" id="company" placeholder="Enter the company name" value={entry.company} onChange={(e) => handleExperienceChange(index, "company", e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="job-description">Job Description</label>
                                            <textarea id="job-description" placeholder="Describe your role and responsibilities" value={entry.jobDescription} onChange={(e) => handleExperienceChange(index, "jobDescription", e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="joining-date">Joining Date</label>
                                            <input type="date" id="joining-date" value={entry.joiningDate} onChange={(e) => handleExperienceChange(index, "joiningDate", e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="end-date">End Date</label>
                                            <input type="date" id="end-date" value={entry.endDate} onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)} disabled={entry.currentlyWorking} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="currently-working">Currently Working Here</label>
                                            <input type="checkbox" id="currently-working" checked={entry.currentlyWorking} onChange={(e) => handleExperienceChange(index, "currentlyWorking", e.target.checked)} />
                                        </div>
                                    </div>
                                ))}
                                <button className="btn btn-add" onClick={addExperienceField}>
                                    Add Another Experience
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Preview and Download */}
                    <div className="form-section">
                        <h2>Preview & Download</h2>
                        <button className="btn btn-preview" onClick={previewResume}>
                            Preview Resume
                        </button>
                        <button className="btn btn-download" onClick={downloadResume}>
                            Download as PDF
                        </button>
                    </div>
                </div>

                {/* Resume Preview */}
                <div className="resume-preview">
                    <h2>Resume Preview</h2>
                    <div className="preview-content" dangerouslySetInnerHTML={{ __html: resumePreview }} />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ResumeBuilder;