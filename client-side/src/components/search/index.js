import { IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { SearchBoxContainer, SearchField, Search, SearchIconWrapper, SearchFieldText } from "../../styles/search";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';



export default function SearchBox() {

  const { showSearchBox, setShowSearchBox } = useUIContext();
  // const [result, setResult] = useState("")

  // const onSubmitForm = async(e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await fetch(`/products/?result=${result}`)

  //     const parseResponse = await response.json()
  //     console.log("parseResponse", parseResponse)
  //   } catch (error) {

  //   }
  // }

  return (

    <Slide direction="left" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
            color="secondary"
            variant="standard"
            fullWidth
            placeholder="search..." />
        <IconButton>
          <SearchIcon
            sx={{ fontSize: { xs: '2rem', md: '3rem'}}}
            color="secondary" />
        </IconButton>
        <IconButton
            onClick={() => setShowSearchBox(true)}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10
            }}
        >
          <CloseIcon
            sx={{fontSize: '2.5rem'}}
            color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  )
}