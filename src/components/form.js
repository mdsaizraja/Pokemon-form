
import { Grid, Paper, TextField, Slider, Select, MenuItem, InputLabel, Avatar, Stack, Chip, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import * as React from 'react';
import { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './form.css';
import Bulbasaur from './images/Bulbasaur.png'
import Charmander from './images/Charmander.png'
import Chikorita from './images/Chikorita.png'
import Cyndaquil from './images/Cyndaquil.png'
import Mudkip from './images/Mudkip.png'
import Squirtle from './images/Squirtle.png'
import Torchik from './images/Torchik.png'
import Totodyle from './images/Totodyle.png'
import Treeko from './images/Treeko.png'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";




const Form = () => {

    const [region, setRegion] = useState('');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState({ name: "", price: 0 })
    const [qty, setQty] = useState(1)
    const [openData, setOpenData] = useState(false);
    const avatar1 = useRef();
    const avatar2 = useRef();
    const avatar3 = useRef();


    const [needBag, setNeedBag] = useState(true);
    const [updateChip, setUpdateChip] = useState(false);
    const [indexOfChipToUpdate, setIndexOfChipToUpdate] = useState('');
    const [pokemonData, setPokemonData] = useState("")
    const [totalCost, setTotalCost] = useState(0)
    const [chips, setChips] = useState([])
    const [fullName, setFullName] = useState("")
    const [codeName, setCodeName] = useState("")
    const [kms, setKms] = useState(0)


    var [var1, var2, var3] = ['', '', '']







    const handleChange = (event) => {
        setRegion(event.target.value);
        [avatar1, avatar2, avatar3].map((item) => {
           item.current.style.border = "white"
            item.current.style.width = "80px"
            item.current.style.height = "80px"
           
        }

        )
    };
    const handleItemChange = (event) => {

        setItems(event.target.value);
    }

    const paperStyle = { padding: 20, height: 'auto', width: 488, margin: "20px auto", borderRadius: '16px' }


    const handleDelete = (index) => {
        let new_chips = chips.filter((chip, idx) => {
            return idx !== index

        })
        console.log("chipppp", new_chips);
        setChips(new_chips)
        calculatePrice(new_chips)
    }

    const handleClick = (index) => {
        setUpdateChip(!updateChip);
        setIndexOfChipToUpdate(index);
        handleClickOpen();
        chips.map((chip, idx) => {
            if (idx === index) {
                setQty(chip.qty);
                setItems(chip.item);
                setNeedBag(chip.state);
            }
        })

    }


    const handleClickOpen = () => {
        setQty(1)
        setItems("")
        setOpen(true);

    };

    const handleClose = () => {
        if (items === "") {
            window.alert("please select item..")
            setOpen(true)
        } else setOpen(false);


    };

    const calculatePrice = (chip_new) => {

        let price = { 'Poke Ball': 5, 'Great Ball': 10, 'Super Potion': 10, 'Hyper Potion': 20 }
        var totalPrice = 0
        chip_new.map((chip) => {
            let totalQty = chip.qty
            totalPrice += chip.state ? (price[chip.item] * totalQty) + 2 : price[chip.item] * totalQty;

        })
        setTotalCost(totalPrice)

    }


    const handleClickOpenData = () => {
        if (fullName === "" || codeName === "" || region === "" || pokemonData === "" || items === "") {
            setOpenData(false);
            window.alert("fill the form properly")

        } else setOpenData(true);
    };


    const handleCloseData = () => {
        setOpenData(false);
    };


    if (region === 'kanto') {
        [var1, var2, var3] = [{ img: Bulbasaur, data: "Bulbasaur", state: false }, { img: Charmander, data: "Charmander", state: false }, { img: Squirtle, data: "Squirtle", state: false }]

    } else if (region === "jhoto") {
        [var1, var2, var3] = [{ img: Chikorita, data: "Chikorita", state: false }, { img: Cyndaquil, data: "Cyndaquil", state: false }, { img: Totodyle, data: "Totodyle", state: false }] //Chikorita, Cyndaquil, Totodyle
    } else if (region === "hoenn") {
        [var1, var2, var3] = [{ img: Treeko, data: "Treeko", state: false }, { img: Torchik, data: "Torchik", state: false }, { img: Mudkip, data: "Mudkip", state: false }]  //Treeko, Torchik, Mudkip
    }

    const updateQty = (e) => {
        setQty(e.target.value)

    }

    const updateKms = (e) => {

        setKms(e.target.value)

    }


    const addChips = () => {
        chips.push({ item: items, qty: qty, state: needBag ? true : false })

        setChips(chips)
        calculatePrice(chips)


    }

    const updateCart = () => {
        chips.map((chip, index) => {
            if (index === indexOfChipToUpdate) {
                chip.item = items;
                chip.qty = qty;
                chip.state = needBag;
            }
        })
        setUpdateChip(!updateChip);
        calculatePrice(chips)
    }


    const handleAvatarChanges = (pokemon, avatar, data) => {
        console.log(pokemon)
        setPokemonData(pokemon)

        pokemon.state = !pokemon.state;
        if (pokemon.state) {
            data.map((item) => {
                if (item === avatar) {
                    item.current.style.border = "2px solid red"
                    item.current.style.width = "100px"
                    item.current.style.height = "100px"
                } else {

                    item.current.style.border = "white"
                    item.current.style.width = "80px"
                    item.current.style.height = "80px"
                }
            })

        } else {
            avatar.current.style.border = "white"
            avatar.current.style.width = "80px"
            avatar.current.style.height = "80px"
        }


    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FE5454'
            }
        },
    });


    const handleFullNameChange = event => {
        setFullName(event.target.value);

    }


    const handleCodeNameChange = event => {
        setCodeName(event.target.value);


    }




    return (

        <Grid>
            <Paper elevation={10} style={paperStyle} className="paper"  >
                <div >
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="mainHeading"> Fill This Form</h2>
                        <p className="heading2">We'll use this info to dominate to poke world! Muhahahahah</p>
                    </div>
                    <div className="p1">

                        <FormControl fullWidth  >
                            <ThemeProvider theme={theme}>
                                <TextField id="filled-basic" label="Full Name" variant="filled" value={fullName} color="primary" onChange={handleFullNameChange}
                                />
                                <TextField id="filled-basic" label="Code Name" variant="filled" placeholder="" style={{ marginTop: 10 }} value={codeName} onChange={handleCodeNameChange} />
                            </ThemeProvider>
                        </FormControl>
                    </div>

                    <div className="p1">
                        <ThemeProvider theme={theme}>
                            <Slider aria-label="Default" valueLabelDisplay="auto" onChange={(e) => updateKms(e)} />
                        </ThemeProvider>
                        <p  >How far is your nearest pokemon center? (in KMs)</p>
                    </div>
                    <div className="p1">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <ThemeProvider theme={theme}>
                                    <InputLabel id="demo-simple-select-label" className="input" >What's your starting region?</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={region}
                                        label="What's your starting region?"
                                        onChange={handleChange}>
                                        <MenuItem value="kanto">Kanto</MenuItem>
                                        <MenuItem value="jhoto">Jhoto</MenuItem>
                                        <MenuItem value="hoenn">Hoenn</MenuItem>
                                    </Select>
                                </ThemeProvider>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="p1">
                        <p >Choose your starter pokemon</p>
                        <Stack direction="row" spacing="auto" >

                            <Avatar className="avatar1" ref={avatar1} sx={{ height: '80px', width: '80px' }} src={var1.img} onClick={() => handleAvatarChanges(var1, avatar1, [avatar1, avatar2, avatar3])} />
                            <Avatar className="avatar2" ref={avatar2} sx={{ height: '80px', width: '80px' }} src={var2.img} onClick={() => handleAvatarChanges(var2, avatar2, [avatar1, avatar2, avatar3])} />
                            <Avatar className="avatar3" ref={avatar3} sx={{ height: '80px', width: '80px' }} src={var3.img} onClick={() => handleAvatarChanges(var3, avatar3, [avatar1, avatar2, avatar3])} />

                        </Stack>


                    </div>

                    <div className="p1">
                        <Stack direction="row" spacing="auto">
                            <p className="p2">What do you want to pack? </p>
                            <ThemeProvider theme={theme}><Button size="small" startIcon={< AddCircleIcon sx={{ height: '40px', width: '40px' }} onClick={handleClickOpen} />} >

                            </Button>
                            </ThemeProvider>
                        </Stack>
                    </div>
                    {/* CHIPS */}

                    <div className="p1" >
                        {
                            chips.map((chip, index) => {
                                console.log("renderingchip")
                                return (
                                    <Chip style={{ margin: 3, backgroundColor: chip.state ? "#75F4FE" : "#DFDFDF" }} key={index} label={`${chip.qty} ${chip.item}`} onDelete={() => handleDelete(index)} onClick={() => handleClick(index)} />
                                )
                            })
                        }
                    </div>
                    <div className="p1" >

                        <p id="totalCost">Total Cost<span style={{ float: "right", color: "black" }}>${totalCost}</span> </p>



                    </div>
                    <div className="p1" style={{ textAlign: 'center' }}>
                        <ThemeProvider theme={theme}>
                            <Button style={{ width: '200px', height: '36px', color: "white" }} variant="contained" size="small" onClick={handleClickOpenData} >
                                START MY JOURNEY
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>

            </Paper>



            {/* //MODAL */}

            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { padding: 2, height: 'auto', width: 488, borderRadius: '10px' } }} style={{ textAlign: 'center' }}>
                <div >
                    <DialogTitle ><h3 className="mainHeading" >Place Your Order</h3></DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <p className="heading2">We'll use this info to pack your order! Muhahahahah</p>
                        </DialogContentText>
                        <div className="p1">


                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth >
                                    <ThemeProvider theme={theme}>
                                        {/* DROPDOWN__                                      */}
                                        <InputLabel id="demo-simple-select-label" className="input" >Choose Item</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={items}
                                            label="What's your starting region?"
                                            onChange={(e) => handleItemChange(e)}

                                        >
                                            <MenuItem value="Poke Ball" > Poke Ball</MenuItem>
                                            <MenuItem value="Great Ball">Great Ball</MenuItem>
                                            <MenuItem value="Super Potion">Super Potion </MenuItem>
                                            <MenuItem value="Hyper Potion"> Hyper Potion</MenuItem>
                                        </Select>
                                    </ThemeProvider>
                                    <div style={{ marginTop: '40px' }}>
                                        <ThemeProvider theme={theme}>
                                            <Slider max={10} min={1} aria-label="Default" valueLabelDisplay="auto" value={qty} onChange={(e) => updateQty(e)} /></ThemeProvider>
                                        <p style={{ float: 'left' }}>Select Quantity</p>
                                    </div>


                                    <div style={{ height: 50 }}>
                                        <ThemeProvider theme={theme}>
                                            <p style={{ paddingTop: 5 }} >I need a bag for that! <span > <Switch style={{ color: "FE5454" }} defaultChecked checked={needBag} onChange={() => setNeedBag(!needBag)} /></span></p>
                                        </ThemeProvider>
                                    </div>

                                </FormControl>


                            </Box>
                        </div>
                    </DialogContent>

                    <DialogActions style={{ justifyContent: 'center' }} className="p1">

                        <ThemeProvider theme={theme}>

                            <Button style={{ width: '200px', height: '36px', color: "white" }}
                                variant="contained" size="small" onClick={() => {
                                    
                                    
                                        handleClose()
                                        
                                            updateChip ? updateCart() : addChips()
                                        
                                    }
                                    

                                
                                } >
                                {updateChip ? "UPDATE CART" : "ADD TO CART"}
                            </Button>
                        </ThemeProvider>

                    </DialogActions>
                </div>

            </Dialog>




            {/* START MY JOURNEY */}


            <Dialog open={openData} onClose={handleCloseData} PaperProps={{ sx: { padding: 2, height: 'auto', width: 400, margin: "20px auto", borderRadius: '10px' } }} style={{ textAlign: 'center' }}>
                <DialogTitle  ><h3 className="mainHeading" >Order Details</h3></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <Box sx={{ minWidth: 120 }}>
                        <p className="heading3">Full Name:<span style={{ color: "#FE5454", opacity: "80%" }}> {fullName}</span> </p>
                        <p className="heading3">Code Name: <span style={{ color: "#FE5454", opacity: "80%" }}> {codeName}</span></p>
                        <p className="heading3">Nearest Pokemon Center: <span style={{ color: "#FE5454", opacity: "80%" }}> {kms}Kms</span></p>
                        <p className="heading3">Starting Region: <span style={{ color: "#FE5454", opacity: "80%" }}> {region}</span></p>
                        <p className="heading3">Starter Pokemon: <span style={{ color: "#FE5454", opacity: "80%" }}> {pokemonData.data}</span></p>
                        <p className="heading3">Items and Quantity:  </p>
                        {
                            chips.map((chip) => {
                                return (<>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <p style={{ color: "#FE5454", opacity: "80%", margin: 0, direction: "row" }}> {chip.qty} {chip.item} </p>
                                        </Grid>
                                    </Grid>
                                </>
                                )

                            })
                        }
                        <p className="heading3">Total Cost: <span style={{ color: "#FE5454", opacity: "100%" }}> ${totalCost}</span> </p>



                    </Box>
                </DialogContent>




                <DialogActions style={{ justifyContent: 'center' }} >





                    <ThemeProvider theme={theme}>



                        <Button style={{ width: '200px', height: '36px', color: "white" }} variant="contained" size="small" onClick={handleCloseData} >
                            OK
                        </Button>
                    </ThemeProvider>

                </DialogActions>

            </Dialog>






        </Grid>
    )
}
export default Form



