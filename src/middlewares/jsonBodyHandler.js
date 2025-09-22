export async function jsonBodyHandler(request, response){    
  //adiciona cada chunk
  const buffers = []

    //Coleta os chunks de dados da requisição
  for await (const chunk of request){
      buffers.push(chunk)
  }

  try {
    // Concatena os chunk e converte para string. Em seguida, converte a string para json

    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error){
    request.body = null
  }
  
  response.setHeader("Content-type", "application/json")

}