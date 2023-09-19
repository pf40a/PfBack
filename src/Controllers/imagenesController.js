require("dotenv").config();
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("fs");
const { AWS_BUCKET_NAME, AWS_BUCKET_REGION, AWS_PUBLIC_KEY, AWS_SECRET_KEY } =
  process.env;

const client = new S3Client({
  region: AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: AWS_PUBLIC_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

async function postImagen(file) {
 // console.log(file)
  const stream = fs.createReadStream(file.tempFilePath);
  const uploadParams = {
    Bucket: AWS_BUCKET_NAME,
    Key: file.name,
    Body: stream,
  };
  const command = new PutObjectCommand(uploadParams);
  return await client.send(command);
}

async function getImagen(fileName) {

  const command = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: fileName,
  });
  const host = "https://s3-pf40a.s3.sa-east-1.amazonaws.com";
  const result = await client.send(command);

  //Guarda la imagen en la carpeta image
  // result.Body.pipe(fs.createWriteStream("./image/" + `${fileName}`));
  
  if (result) {
    //OBTENER LA URL
    var nombreArchivo = fileName;
    var nombreSinEspacios = nombreArchivo.replace(/ /g, "+");

    return host + "/" + nombreSinEspacios;
  } else {
    return { error: "No existe en el bucket el archivo: " + fileName };
  }
}

module.exports = {
  postImagen,
  getImagen,
};
