import React, { useState, useEffect, useContext } from 'react';
import { Card } from '@mui/material';
import CatTable from './Extra/CatTable';
import { subDays } from 'date-fns';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Label from 'src/components/Label';
import Image from 'next/image';
import EditTSmodal from '../Edit/EditTSmodal'
import DeleteCatModal from '../Edit/DeleteCatModal'
import MYS from '../../../Styles/mystyle.module.css'
import { MediaFilesUrl, MediaFilesFolder } from '../../../Data/config'
import Button from '@mui/material/Button';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {
    Tooltip,
    Divider,
    Box,
    FormControl,
    InputLabel,

    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Select,
    MenuItem,
    Typography,
    useTheme,
    CardHeader
} from '@mui/material';

function RecentOrders() {

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    useEffect(() => {

        const handleSubmit = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/V3/List/TSlist", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    console.log(parsed.ReqD.TS)
                    setRetdata(parsed.ReqD.TS)
                    setIsLoading(false)
                })
        }
        handleSubmit()


    }, [router.query])

    const theme = useTheme();

    return (

        <>
            <Card>
                {!isLoading &&
                    <div>
                        {Retdata.map((item) => {
                            return <div className={MYS.ItemList} key={item._id}>
                                <div className={MYS.ItemListBox}>
                                    <div className={MYS.ItemListBoxA}>
                                        <Image
                                            src={`${MediaFilesUrl}${MediaFilesFolder}/${item.img}`}
                                            width={150}
                                            height={150}
                                            
                                            alt='img'

                                        />
                                    </div>
                                    <div className={MYS.ItemListBoxB}>
                                        <h3>{item.title}</h3>
                                        <div>
                                            <span>Price : ₹{item.mprice}</span>
                                        </div>
                                        <div>
                                            <span>Sale Price : ₹{item.sprice}</span>
                                        </div>
                                        <div>
                                            <span>Category : {item.catid}</span>
                                        </div>
                                        <div style={{minHeight:'20px'}}>
                                            </div>
                                        <div style={{ display: 'flex', alignItems: 'center'}}>
                                            <EditTSmodal ProductData={item} />
                                            <div style={{ minWidth:'10px'}}></div>
                                            <Link href={`/TSChapters/${item._id}`}>
                                                <Button size='small' variant="outlined" startIcon={<RemoveRedEyeIcon />}>
                                                    View
                                                </Button>
                                            </Link>

                                            <div style={{ minWidth: '10px' }}></div>
                                            <Link href={`/TSChapters/${item._id}`}>
                                                <Button size='small' variant="outlined" startIcon={<ViewStreamIcon />}>
                                                    Chapters
                                                </Button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        }

                        )}
                      
                    </div>

                }
            </Card>

        </>
    );
}

export default RecentOrders;
