const Notification = (props) => {
  //  Write your code here.
  const { styling, url, message } = props;
  const container = (
    <div className={`box ${styling}`}>
      <img src={url} className="img-size" />
      <p className="paragraph">{message} Message</p>
    </div>
  );
  return container;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="sub-container">
      <h1 className="heading">Notifications</h1>
      <Notification
        styling="blue-notification"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information"
      />
      <Notification
        styling="green-notification"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success"
      />
      <Notification
        styling="yellow-notification"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning"
      />
      <Notification
        styling="red-notification"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
