function status(request, response) {
  response.status(200).json({ valor: "testando minha primeira API" });
}

export default status;
