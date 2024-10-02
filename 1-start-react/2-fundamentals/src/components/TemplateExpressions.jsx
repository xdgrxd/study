const TemplateExpressions = () => {
  const userName = "Big Smoke";

  const userData = {
    age: 21,
    job: "developer",
  };

  return (
    <div>
      <h1>Hi {userName}, what's up?</h1>
      <p>You are {userData.job}</p>
    </div>
  );
};

export default TemplateExpressions;
