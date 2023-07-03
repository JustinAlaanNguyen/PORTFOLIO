function main() {
  //profile pic
  var profile = document.getElementById("profile_pic");
  var profile_img = document.createElement("img");
  profile_img.src = "../pics/profile_pic.jpeg";
  profile_img.id = "profile_img";
  profile.appendChild(profile_img);

  //Skills
  var skillDiv = document.getElementById("skills");
  var skillHeader = document.createElement("h2");
  skillHeader.textContent = "Technical Skills";
  skillHeader.classList.add("skill_header")
  skillDiv.appendChild(skillHeader);
  for (var i = 0; i < skills.length; i++) {
    var skill_card = document.createElement("div");
    skill_card.textContent = skills[i].name;
    skill_card.classList.add("skill_card");
    skillDiv.appendChild(skill_card);
  }
  
  //education
  var profile = document.getElementById("school_pics");
  var profile_img = document.createElement("img");
  profile_img.src = "../pics/IMG_7961.jpg";
  profile_img.id = "lourdes_pic";
  profile.appendChild(profile_img);

  var all_education = document.getElementById("school");

  var education_header = document.createElement("h1");
  education_header.textContent = "Education";
  education_header.classList.add("education_header");
  all_education.appendChild(education_header);

  for (var i = 0; i < education.length; i++) {
    var education_card = document.createElement("div");
    education_card.classList.add("education_card");

    var education_school = document.createElement("h2");
    education_school.textContent = education[i].school;
    education_school.classList.add("education_school");
    education_card.appendChild(education_school);

    var education_location = document.createElement("h4");
    education_location.textContent = "Location: " + education[i].location;
    education_location.classList.add("education_location");
    education_card.appendChild(education_location);

    var education_degree = document.createElement("h4");
    education_degree.textContent = "Degree: " + education[i].degree;
    education_degree.classList.add("education_degree");
    education_card.appendChild(education_degree);

    var education_graduated = document.createElement("h4");
    education_graduated.textContent =
      "Year of Completion: " + education[i].graduated;
    education_graduated.classList.add("education_graduated");
    education_card.appendChild(education_graduated);

    var education_grade = document.createElement("h4");
    education_grade.textContent = "Grade: " + education[i].grade;
    education_grade.classList.add("education_grade");
    education_card.appendChild(education_grade);

    if (education[i].honours !== "none") {
      var education_honours = document.createElement("h4");
      education_honours.textContent = "Honours: " + education[i].honours;
      education_honours.classList.add("education_honours");
      education_card.appendChild(education_honours);
    }

    all_education.appendChild(education_card);
  }


  //projects
  
}
addEventListener("DOMContentLoaded", main);
