'use client';

import '@/styles/ProductCardComponent.css'

//Import React Library
import Link from "next/link";

//Import Material UI Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


//Import Material UI Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';





export default function ProductCardComponent(props) 
{
    const {product,openEditModalCallback,openRemoveModalCallback} = props;


   return (
                            <Box sx={{ minWidth: 300 }}>
                                <Card  variant="elevation">

                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {product.name}
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {product.price}
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {product.description}
                                        </Typography>

                                    </CardContent>

                                    <CardActions>
                                        <IconButton color='silver' component={Link} href={`/products/${product.id}`}>
                                          <VisibilityIcon />
                                        </IconButton>

                                        <IconButton color='warning' onClick={(e)=>
                                            {
                                                e.currentTarget.blur(); // remove focus
                                                openEditModalCallback(product);
                                            }}>
                                          <EditIcon />
                                        </IconButton>

                                        <IconButton color="error" onClick={(e)=>
                                            {
                                                e.currentTarget.blur(); // remove focus
                                                openRemoveModalCallback(product);
                                            }}>
                                          <DeleteIcon />
                                        </IconButton>
                                        
                                    </CardActions>

                                </Card>
                            </Box>

                        )
    
}