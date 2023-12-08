import { Button, IconButton, styled } from '@mui/material'
import './App.css'
import  SaveIcon  from '@mui/icons-material/Save'
import { AddShoppingCart } from '@mui/icons-material'

function App() {
  
  const BtnStyled = styled(Button) ({
    color:'#fff',
    fontSize:'25px',
    background:'linear-gradient(45deg, #fe6b8b, #ff8e53)'
  });

  return (
    <>
    <div>
      <BtnStyled>Botão com Estilo</BtnStyled>
    </div>
    <IconButton>
      <AddShoppingCart/>
    </IconButton>
      <div>
        <Button>Hello Word</Button>
      </div>

      <div>
        <Button
        startIcon={<SaveIcon/>}
        endIcon={<SaveIcon/>}
        variant='contained'
        color='success'
        >Save</Button>
      </div>

      <div>
        <Button
        variant='outlined'
        >
        Outiline
        </Button>
      </div>
    </>
  )
}

export default App
