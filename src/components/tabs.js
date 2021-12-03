import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ('topics') as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class='topics'>
  //   <div class='tab'>javascript</div>
  //   <div class='tab'>bootstrap</div>
  //   <div class='tab'>technology</div>
  // </div>
  //

  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('class', 'topics');
  const divOne = document.createElement('div');
  divOne.setAttribute('class', 'tab');
  const divTwo = document.createElement('div');
  divTwo.setAttribute('class', 'tab');
  const divThree = document.createElement('div');
  divThree.setAttribute('class', 'tab');
  const divFour = document.createElement('div');
  divFour.setAttribute('class', 'tab');
  const divFive = document.createElement('div');
  divFive.setAttribute('class', 'tab');

  // mainDiv.textContent = topics.mainDiv;
  divOne.textContent = topics[0]
  divTwo.textContent = topics[1]
  divThree.textContent = topics[2]
  divFour.textContent = topics[3]
  divFive.textContent = topics[4]

  mainDiv.appendChild(divOne);
  mainDiv.appendChild(divTwo);
  mainDiv.appendChild(divThree);
  mainDiv.appendChild(divFour);
  mainDiv.appendChild(divFive);

  return mainDiv;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const entryPointTwo = document.querySelector(selector)
  axios.get('http://localhost:5000/api/topics')
    .then(res => {
      //console.log(res.data.topics)
      const newArray = [];
      for (let i = 0; i < 5; i++) {
        newArray.push(res.data.topics[i])
      }
      //console.log(newArray);
      entryPointTwo.appendChild(Tabs(newArray));
    })
    .catch(err => {
      console.log('There is an error in the code')
    })
}


export { Tabs, tabsAppender }




  //adding elements
  // const topicElement = document.createElement('div');
  // const tabOne = document.createElement('div');
  // const tabTwo = document.createElement('div');
  // const tabThree = document.createElement('div');

  // //adding classes
  // topicElement.classList.add('topics');
  // tabOne.classList.add('tab');
  // tabTwo.classList.add('tab');
  // tabThree.classList.add('tab');
  // //updating the content 
  // topicElement.textContent = topics.topicElement;
  // tabOne.textContent = topics.tabOne;
  // tabTwo.textContent = topics.tabTwo;
  // tabThree.textContent = topics.tabThree;
  // //appending the classes
  // topicElement.appendChild(tabOne);
  // topicElement.appendChild(tabTwo);
  // topicElement.appendChild(tabThree);