import { Router } from "express";

export const testRoute = () => Router().post('/test', (async (req, res) => {

    const { test } = req.body;

    console.log('test', test)
    const answerTest = 'answerTest'

    return res.json({ answerTest });
}));