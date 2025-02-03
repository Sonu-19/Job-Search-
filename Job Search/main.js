const jobs = [
  {
    title: "Software Engineer",
    image: "\image\software.png",
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "2",
    link: "./detailsSoftware.html",
  },

  {
    title: "Data Scientist",
    image: "./database.png",
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "3",
    link: "./detailsData.html",
  },

  {
    title: "Project Manager",
    image: "./manager.png",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "1",
    link: "./detailsProject.html",
  },

  {
    title: "Product Manager",
    image: "./offer.png",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "./detailsProduct.html",
  },

  {
    title: "Sales Representative",
    image: "./sales-agent.png",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "./PracticalSales.html",
  },

  {
    title: "Marketing Manager",
    image: "./accounting.png",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    link: "./PracticalMarketing.html",
  },
  {
    title:"IT Security Analyst",
    image:"./cyber-security.png",
    details:"Develops and manages cybersecurity products, ensuring security and effectiveness from inception to post-launch.",
    openPositions: "1",
    link:"./DetailsSecurity.html",
  },
  {
    title:"Systems Administrator",
    image:"software engineer.png",
    details:"Manages computer systems, networks, servers, and hardware to ensure operational, secure, and reliable IT infrastructure.",
    openPositions:"3" ,
    link:"./SystemsAdministrator.html",
  },
  {
    title:"Data Analyst",
    image:"data analys.png",
    details:" Collects, analyzes, and interprets data to provide insights for decision-making. Works with large datasets and analytical tools to uncover valuable information.",
    openPositions:"4" ,
    link:"./DataAnalyst.html",
  },
  {
    title:" Network Engineer",
    image:"network engineer.png",
    details:"Designs, implements, and manages secure and efficient computer networks for organizations.",
    openPositions:"2",
    link:"./ NetworkEngineer.html",
  },
  {
    title:"IT Support Specialist",
    image:"it support.png",
    details:"Provides technical support services to ensure the smooth operation of IT systems within an organization.",
    openPositions:"4",
    link:"./ ITSupportSpecialist.html",
  },
  {
    title:"Network Administrator",
    image:"network administrator.png",
    details:"Manage the physical infrastructure of an organization's network including hardware, software, security protocols, etc.",
    openPositions:"3",
    link:"./NetworkingAdministrator.html",
  },
  {
    title:"Content Writer",
    image:"content writer.png",
    details:"Writes articles on various topics such as technology, business, politics etc..",
    openPositions:"5",
    link:"./ContentWriter.html",
  },
  {
    title:"Front-End Developer",
    image:"front end.png",
    details:"Develops the front end of websites using HTML, CSS, JavaScript, ReactJS or AngularJS.",
    openPositions:"2",
    link:"./Front-EndDeveloper.html",
  },
  {
  title:"Bussiness Analyst",
  image:"bussiness.png",
  details:"Analyzes data to make strategic decisions about marketing campaigns, sales strategy, product development, and more.",
  openPositions:"4",
  link:"./BusinessAnalyst.html",
  },
  {
    title:"Software Tester",
    image:"software tester.png",
    details:"Identifies errors in software to ensure it meets quality standards before release.",
    openPositions:"3",
    link:"./SoftwareTester.html",
  },
  {
    title:"Ux Designer",
    image:"ux-design.png",
    details:"Creates user experience designs that are intuitive and easy to use.",
    openPositions:"1",
    link:"./UXDesigner.html",
  },
  {
    title:"DevOps Engineer",
    image:"devops.png",
    details:"Manages server infrastructure for applications.",
    openPositions:"2",
    link:"./DevOpsEngineer.html",
  },

];

const jobsHeading = document.querySelector(".jobs-list-container h1");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }
      

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});



const createJobListingCards1 = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
   

      let applyBtn = document.createElement("a");
      applyBtn.href = job.applyLink; 
      applyBtn.innerHTML = "Apply Now";
      applyBtn.classList.add("apply-btn");

      jobCard.appendChild(applyBtn);

      jobsContainer.appendChild(jobCard);
    }
  });
};



