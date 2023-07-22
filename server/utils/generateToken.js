
const generate = async () => {
  const res = await fetch("http://20.244.56.144/train/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyName: "Devesh Train Service",
      clientId: "64db8446-6237-442b-ba81-ffe66da2ed3b",
      ownerName: "Devesh",
      ownerEmail: "devesh2020it005@abesit.edu.in",
      rollNo: "2002900130018",
      clientSecret: "iQtPiPomlXcvuojf",
    }),
  });
  const json = await res.json();
  return json
};

module.exports = generate;
