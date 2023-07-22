
const generate = async () => {
  const res = await fetch("http://20.244.56.144/train/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyName: "Aviral Enterprises",
      clientId: "f44a769b-4799-4e74-aa88-d27c8efe5f8a",
      ownerName: "Aviral Sharma",
      ownerEmail: "aviral2020it015@abesit.edu.in",
      rollNo: "2002900130014",
      clientSecret: "bQiLPJINEKzHKmJB",
    }),
  });
  const json = await res.json();
  return json
};

module.exports = generate;
