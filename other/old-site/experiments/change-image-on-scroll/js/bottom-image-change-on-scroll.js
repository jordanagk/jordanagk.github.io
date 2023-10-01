// ** Code to select the div.progress where we will then be able to link the const percentage to the width of the progressTag when we will scroll.
const progressTag = document.querySelector("div.progress")

// ** Code to select the section HTML tags which are then used along with the HTML data attribute to make changes on scroll
const sections = document.querySelectorAll("section")


const stage1 = document.querySelector("div.progress-s1")
const stage2 = document.querySelector("div.progress-s2")
const stage3 = document.querySelector("div.progress-s3")
const stage4 = document.querySelector("div.progress-s4")
const stage5 = document.querySelector("div.progress-s5")

// ********************** Code 2 –––––––––– CHANGE TEXT ONCE WE'VE SCROLLED INTO THE SECTION  *****************************
// when we scroll the page, see how far down the page we've scrolled and then check for each section, and check to see if we've scrolled passed that threshold. If we have passed the section then update the text in the header.

document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset

  sections.forEach(section => {
    //     offsetTop is the exact location of the top of a given section. By doing section.offsetTop - 60 we are saying that we want the changes to occur when we've scrolled to within 632 pixels of the top of that section.

    if (section.offsetTop - 632 <= pixels) {
      //       .getAttribute utilizes the data attribute in connection with an HTML tag. You can create a wide variety of attributes to work as Hooks for javascript and jquery events. You can name a data attribute anything you'd like similar to an id or class. It looks like data-_________="____________"


      if (section.hasAttribute("data-stage1")) {
        stage1.classList.add("visible")
        stage2.classList.remove("visible")
        stage3.classList.remove("visible")
        stage4.classList.remove("visible")
        stage5.classList.remove("visible")
      } else {}

      if (section.hasAttribute("data-stage2")) {
        stage1.classList.remove("visible")
        stage2.classList.add("visible")
        stage3.classList.remove("visible")
        stage4.classList.remove("visible")
        stage5.classList.remove("visible")
      } else {}

      if (section.hasAttribute("data-stage3")) {
        stage1.classList.remove("visible")
        stage2.classList.remove("visible")
        stage3.classList.add("visible")
        stage4.classList.remove("visible")
        stage5.classList.remove("visible")
      } else {}

      if (section.hasAttribute("data-stage4")) {
        stage1.classList.remove("visible")
        stage2.classList.remove("visible")
        stage3.classList.remove("visible")
        stage4.classList.add("visible")
        stage5.classList.remove("visible")
      } else {}

      if (section.hasAttribute("data-stage5")) {
        stage1.classList.remove("visible")
        stage2.classList.remove("visible")
        stage3.classList.remove("visible")
        stage4.classList.remove("visible")
        stage5.classList.add("visible")
      } else {}

    }
  })
})
// ********************** end of Code 2 –––––––––– CHANGE TEXT ONCE WE'VE SCROLLED INTO THE SECTION  *****************************
