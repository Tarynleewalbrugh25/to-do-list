let input = document.querySelector('[data-itemInput]')
let btnAdd = document.querySelector('[data-Add]')
let btnSort = document.querySelector('[data-sort]')
let listWrapper = document.getElementById('tasklist')
let btnRemove = document.querySelector('[data-remove]')


let task = []
function added(){
    let name = document.querySelector('[data-itemInput]').value
    task.push(name)
    localStorage.setItem('taskNames',JSON.stringify(task))
    displayTask()
}
btnAdd.addEventListener('click', added)
let checkbox = document.createElement("input")
checkbox.type = checkbox
function displayTask() {
    function displayTask() {
        let cTask = JSON.parse( localStorage.getItem('taskNames') )
        if(cTask) {
            listWrapper.innerHTML = ""
            cTask.forEach( events=> {
                listWrapper.innerHTML += 
                `<li>${events}</li>`
            })
        }else {
            listWrapper.innerHTML = 'No data'
        }
    }
    displayTask()
}