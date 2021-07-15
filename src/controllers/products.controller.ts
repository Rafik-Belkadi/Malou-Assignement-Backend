import axios from 'axios';
import { Request, Response } from 'express';
import moment from 'moment';

/*
 *  Get Products from API by Date : YYYY-MM-DD   
 */
export const getProductsByDate = (req: Request, res: Response) => {
    const date: string = req.params.date;
    
    // Check the date Format
    if(!isValidDate(date)) res.status(400).json({message: "Invalid Date"})
    
    // API request to get posts by date
    axios.get(`${process.env.API_URL}/posts?day=${date}`, {
        headers: {
            'Authorization': "bearer " + process.env.API_TOKEN
        }
    }).then(response => {
        const posts = response.data.posts;
        res.status(200).json(posts)
    }).catch(err => {
        res.status(500).json({ message: "Could not get posts", error: err })
    })
}

export const getTopics = (req: Request, res: Response) => {
    
    // API request to get topics
    axios.get(`${process.env.API_URL}/topics`, {
        headers: {
            'Authorization': "bearer " + process.env.API_TOKEN
        }
    }).then(response => {
        const posts = response.data.topics;
        res.status(200).json(posts)
    }).catch(err => {
        res.status(500).json({ message: "Could not get topics", error: err })
    })
}


const isValidDate = (date: string): boolean => moment(date, 'YYYY-MM-DD').isValid() && date.includes("-")