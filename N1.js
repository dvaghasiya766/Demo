function getData() {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ name: "Dev", surname: "Vaghasiya", age: 20 }),
      5000
    );
  });
}

const doNetWorkCall = async () => {
  const response = await getData();
  //   const jsonData = await response;
  console.log(response);
};
doNetWorkCall();