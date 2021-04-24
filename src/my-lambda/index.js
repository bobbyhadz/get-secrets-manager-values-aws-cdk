/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */

async function main(event) {
  console.log('SECRET_NAME 👉', process.env.SECRET_NAME);
  console.log('SECRET_VALUE 👉', process.env.SECRET_VALUE);

  return {body: JSON.stringify({message: 'SUCCESS'}), statusCode: 200};
}
