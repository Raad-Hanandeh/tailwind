/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./"],
  theme: {
    extend: {
      colors:{
      "main":'#898989',
      'button':'#b88e2f',
      'bgtext':'#f4f5f7',
      'textcard':'#3a3a3a',
      'span':'#b0b0b0',
      'pink':'#fcf8f3',
      '#000': '#000000',
      '#9f9f9f':'9f9f9f',
      '#333333':'#333333',
      '#3a3a3a':'#3a3a3a'
      },
      maxWidth: {
        'disktop': '76.97rem',
        
        
      },
      height: {
        '670px': '41.875rem',
        '582px':'582px',
        '486px':'486px',
        '32px':'32px',
        '1400px':'1400px',
        '443px':'443px',
        '74px':'74px'
       
      },
      width: {
        '404px':'404px',
        '372px':'372px',
        '50px':'50px',
        '643px':'643px',
        '222px':'222px'
        
      },
      fontSize: {
        "40px": '40px',
        '34px':'34px',
        '52px':'52px',
        '18px':'18px'

      }
    },
  },
  plugins: [],
}

