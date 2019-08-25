const enableDOMQueue = (queue) => {
  let originalEnqueue = queue.enqueue;
  let originalDequeue = queue.dequeue;
  let list = document.querySelector("ol");

  queue.enqueue = (value) => {
    originalEnqueue.call(queue, value);
    let li = document.createElement("li");
    let {
      crust,
      size,
      topping,
      special_instructions
    } = value
    li.innerText = `${size}, ${crust}, ${topping}, ${special_instructions}`
    list.appendChild(li)
  }

  queue.dequeue = () => {
    originalDequeue.call(queue);
    let firstChild = list.firstChild;
    list.removeChild(firstChild)
  }
}``

document.addEventListener('DOMContentLoaded', () => {
  const enqueueBtn = document.querySelector('#enqueue_btn');

  enqueueBtn.addEventListener('click', () => {
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const address = document.querySelector('#address');

    const size = document.querySelector("input[name='form']:checked");
    const crust = document.querySelector("#crust");
    const crustSelected = crust.options[crust.selectedIndex].value;

    let toppingArr = [];
    const topping = document.querySelectorAll("input[type='checkbox']:checked");
    for (let x of topping) {
      toppingArr.push(x.value);
    }

    const specialInstructions = document.querySelector('textarea');
    
    const order = {
      first_name: firstName.value,
      last_name: lastName.value,
      address: address.value,
      size: size.value,
      crust: crustSelected,
      topping: toppingArr,
      special_instructions: specialInstructions.value
    }
    console.log(obj);
  })
})