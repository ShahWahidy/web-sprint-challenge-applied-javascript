const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `titleElement`, `dateElement` and `tempElement` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class='header'>
  //    <span class='dateElement'>{ dateElement }</span>
  //    <h1>{ titleElement }</h1>
  //    <span class='tempElement'>{ tempElement }</span>
  //  </div>
  //
  // const header = document.createElement('div');
  // const dateE = document.createElement('span');
  // const titleE = document.createElement('h1');
  // const tempE = document.createElement('span');

  // dateE.textContent = date;
  // titleE.textContent = title;
  // tempE.textContent = temp;

  // header.appendChild(dateE);
  // header.appendChild(titleE);
  // header.appendChild(tempE);

  // header.classList.add('header');
  // dateE.classList.add('dateElement');
  // tempE.classList.add('tempElement');

  const div = document.createElement('div');
  div.setAttribute('class','header');

  const span = document.createElement('span');
  span.setAttribute('class','date');
  span.textContent = date;

  const heading = document.createElement('h1');
  heading.textContent = title;

  const span2 = document.createElement('span');
  span2.setAttribute('class','temp');
  span2.textContent = temp;

  //adding span and h1 to div
  div.appendChild(span);
  div.appendChild(heading);
  div.appendChild(span2);

  return div;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entryPoint = document.querySelector(selector);
  entryPoint.appendChild(Header('Lambda Times','January 6 2021','Temp: 26' ));
  
}

export { Header, headerAppender }
