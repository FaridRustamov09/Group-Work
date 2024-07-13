// create todo list
let error=document.querySelector('.error-msg')
let mainInput= document.querySelector('.main-input')
let searchInput= document.querySelector('.search')
let form=document.querySelector('form')
let ul=document.querySelector('ul')
// let i
form.addEventListener('submit',addTask)
//add todo 

function addTask(e) {
    e.preventDefault()
    if (mainInput.value.length==0) {
        error.style.display='block'
        ul.style.display='none'
     }
     else{
        error.style.display='none'
        ul.style.display='block'
        ul.innerHTML+=`<li>
            <p>${mainInput.value}</p>
            <button class="remove-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="9.5"
                  stroke="#C4C4C4"
                />
                <path d="M6 6L14 14" stroke="#C4C4C4" />
                <path d="M6 14L14 6" stroke="#C4C4C4" />
              </svg>
            </button>
          </li>`
          let removeBtns=document.querySelectorAll('.remove-btn')
          removeBtns.forEach(element => {
            element.addEventListener('click',()=>removeItem(element))
          });
          form.reset()
     }
    }

    // remove todo

    function removeItem(element) {
    console.log(element.parentElement);
    element.parentElement.remove()
    let list=document.querySelectorAll('li')
    if (list.length==0) {
        ul.style.display='none'
    } else {
        ul.style.display='block'
    }
    }
    //search todo
       
    searchInput.addEventListener('keyup',(e)=>searchList(e))

    function searchList(e) {
   let list=document.querySelectorAll('li')
   console.log(e.target.value);
   
   list.forEach(element => {
    if (element.firstElementChild.innerText.includes(e.target.value)) {
    element.style.display='flex'
    } else {
     element.style.display='none'   
    }
   });
    }
    