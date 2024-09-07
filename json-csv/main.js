const jsonForm = document.querySelector("#jsonform")
const csvForm = document.querySelector("#csvform");
const bConvert = document.querySelector("#bConvert");

bConvert.addEventListener("click", (e) => {
  let json;
  let keys = [];
  let values = [];
  try {
    json = JSON.parse(jsonForm.value);
  } catch (error) {
    console.error("Formato incorrecto", error);
    return;
  }

  if (!Array.isArray(json)) {
    console.log("No es un arreglo");
    return;
  }

  json.forEach((item) => {
    const nkeys = Object.keys(item);
    if (keys.length === 0) {
      keys = [...nkeys];
    } else if (nkeys.length !== keys.length) {
      console.error("Number of keys are different");
      return;
    }
    const row = keys.map((k) => item[k]);
    values.push([...row]);
  });

  values.unshift(keys);
  const text = values.map((v) => v.join(",")).join("\n");
  csvForm.value = text;
});
