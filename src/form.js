
import { Grid, Paper, TextField, Slider, Select, MenuItem, InputLabel, AvatarGroup, Avatar, Stack, Chip, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, InputBase } from '@mui/material'
import * as React from 'react';
import { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './form.css';
import Icon from '@mui/material/Icon';
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
import { color } from '@mui/system';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";




const Form = () => {

    const [region, setRegion] = useState('');
    const [open, setOpen] = useState(false);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [items, setItems] = useState("")
    const [qty, setQty] = useState(0)
    const [openData, setOpenData] = useState(false);
    const avatar1 = useRef(); 
    const avatar2 = useRef(); 
    const avatar3 = useRef();
		const chipRef = useRef(); 
		const [needBag,setNeedBag] = useState(true);
		const [updateChip,setUpdateChip] = useState(false);
		const [indexOfChipToUpdate,setIndexOfChipToUpdate] = useState('');

    var [var1,var2,var3] = ['','','']


    const [chips, setChips] = useState([])



    const handleChange = (event) => {
        setRegion(event.target.value);
        [avatar1,avatar2,avatar3].map((item)=>{
            item.current.style.border="white"
            item.current.style.width="80px"
            item.current.style.height="80px"
        })
    };
    const handleItemChange = (event) => {
        setItems(event.target.value);
    };

    const paperStyle = { padding: 20, height: 'auto', width: 488, margin: "20px auto", borderRadius: '16px' }


    const handleDelete = (index) => {
        let new_chips = chips.filter((chip, idx) => {
            return idx !== index
        })

        setChips(new_chips)
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
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenData = () => {
        setOpenData(true);
    };


    const handleCloseData = () => {
        setOpenData(false);
    };


    if (region === 'kanto') {
         [var1, var2, var3] = [{img:Bulbasaur,data:"Bulbasaur",state:false},{img:Charmander,data:"Charmander",state:false},{img:Squirtle,data:"Squirtle",state:false}]

    } else if (region === "jhoto") {
        [var1, var2, var3] = [{img:Chikorita,data:"Chikorita",state:false},{img:Cyndaquil,data:"Cyndaquil",state:false},{img:Totodyle,data:"Totodyle",state:false}] //Chikorita, Cyndaquil, Totodyle
    } else if (region === "hoenn") {
        [var1, var2, var3] = [{img:Treeko,data:"Treeko",state:false},{img:Torchik,data:"Torchik",state:false},{img:Mudkip,data:"Mudkip",state:false}]  //Treeko, Torchik, Mudkip
    }

    const updateQty = (e) => {

        setQty(e.target.value)

    }

    const addChips = () => {
        chips.push({ item: items, qty: qty,state:needBag ? true:false  })
        setChips(chips)
				// if(needBag){

				// }

    }

		const updateCart=()=>{
			chips.map((chip,index)=>{
				if(index===indexOfChipToUpdate){
					chip.item=items;
					chip.qty=qty;
					chip.state=needBag;
				}
			})
			setUpdateChip(!updateChip);
		}


    const handleAvatarChanges = (pokemon,avatar,data) => {
    //     console.log(data);
    //    data.map((item)=>{
    //        if(JSON.stringify(item)===JSON.stringify(pokemon)){
    //            item.state=!item.state;
    //            pokemon.state=!pokemon.state;
    //        }else{
    //            item.state=false;
    //            pokemon.state=item.state;
    //        }
    //    })
        pokemon.state=!pokemon.state;
        if(pokemon.state){
            data.map((item)=>{
                if(item===avatar){
                    item.current.style.border="2px solid red"
                    item.current.style.width="100px"
                    item.current.style.height="100px"
                }else{
                    // console.log(item);
                    item.current.style.border="white"
                    item.current.style.width="80px"
                    item.current.style.height="80px"
                }
            })
        // console.log("data=",pokemon.data);
        //  avatar.current.style.border="2px solid red"
        //  avatar.current.style.width="100px"
        //  avatar.current.style.height="100px"
        }else{
            avatar.current.style.border="white"
            avatar.current.style.width="80px"
            avatar.current.style.height="80px" 
        }
         

    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FE5454'
            }
        },
    });







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
                                <TextField id="filled-basic" label="Full Name" variant="filled" color="primary"
                                />
                                <TextField id="filled-basic" label="Code Name" variant="filled" placeholder="" style={{ marginTop: 10 }} />
                            </ThemeProvider>
                        </FormControl>
                    </div>

                    <div className="p1">
                        <ThemeProvider theme={theme}>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
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
                            
                            <Avatar className="avatar1" ref={avatar1} sx={{ height: '80px', width: '80px' }} src={var1.img} onClick={()=>handleAvatarChanges(var1,avatar1,[avatar1,avatar2,avatar3])} />
                            <Avatar className="avatar2" ref={avatar2} sx={{ height: '80px', width: '80px' }} src={var2.img} onClick={()=>handleAvatarChanges(var2,avatar2,[avatar1,avatar2,avatar3])} />
                            <Avatar className="avatar3" ref={avatar3} sx={{ height: '80px', width: '80px' }} src={var3.img} onClick={()=>handleAvatarChanges(var3,avatar3,[avatar1,avatar2,avatar3])} />
                            
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
                                return (
                                    <Chip ref={chipRef} style={{ margin: 3,backgroundColor:chip.state ? "#22d3ee" : "grey" }} key={index} label={`${chip.qty} ${chip.item}`} onDelete={() => handleDelete(index)} onClick={() => handleClick(index)} />
                                )
                            })
                        }
                    </div>
                    <div className="p1" >

                        <p id="totalCost">Total Cost<span style={{ float: "right", color: "black" }}>$3555775</span> </p>



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
                                            onChange={handleItemChange}

                                        >
                                            <MenuItem value="Poke Ball"> Poke Ball</MenuItem>
                                            <MenuItem value="Great Ball">Great Ball</MenuItem>
                                            <MenuItem value="Super Potion">Super Potion </MenuItem>
                                            <MenuItem value="Hyper Potion"> Hyper Potion</MenuItem>
                                        </Select>
                                    </ThemeProvider>
                                    <div style={{ marginTop: '40px' }}>
                                        <ThemeProvider theme={theme}>
                                            <Slider defaultValue={4} max={10} aria-label="Default" valueLabelDisplay="auto" value={qty} onChange={(e) => updateQty(e)} /></ThemeProvider>
                                        <p style={{ float: 'left' }}>Select Quantity</p>
                                    </div>


                                    <div style={{ height: 50 }}>
                                        <ThemeProvider theme={theme}>
                                            <p style={{ paddingTop: 5 }} >I need a bag for that! <span > <Switch style={{ color: "FE5454" }}  {...label} defaultChecked checked={needBag} onChange={()=>setNeedBag(!needBag)} /></span></p>
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
                                    {updateChip ? updateCart() 
																			: addChips()}
                                }} >
                                {updateChip ? "UPDATE CART": "ADD TO CART"}
                            </Button>
                        </ThemeProvider>

                    </DialogActions>
                </div>

            </Dialog>




{/* START MY JOURNEY */}



            <Dialog open={openData} onClose={handleCloseData} PaperProps={{ sx: { padding: 2, height: 'auto', width: 400, margin: "20px auto", borderRadius: '10px' } }} style={{ textAlign: 'center' }}>
                <DialogTitle  ><h3 >Place Your Order</h3></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <h4>We'll use this info to pack your order! Muhahahahah</h4>
                    </DialogContentText>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" className="input" style={{ margin: 10 }}>Choose Item</InputLabel>



                        </FormControl>


                    </Box>
                </DialogContent>

                <DialogActions style={{ justifyContent: 'center' }} >


                    <Button variant="contained" size="small" onClick="hand" onClick={handleCloseData} >
                        OK
                    </Button>

                </DialogActions>

            </Dialog>






        </Grid>
    )
}
export default Form