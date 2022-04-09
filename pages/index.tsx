import type {NextPage} from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList/TodoList";
import {Container} from "@mui/material";
import TodoInput from "../components/TodoInput/TodoInput";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>NextJS+MobX ToDo App</title>
            </Head>
            <main>
                <Header/>
                <Container
                    maxWidth="md"
                    sx={{
                        margin: "3em auto"
                    }}
                >
                    <TodoInput/>
                    <TodoList/>
                </Container>
            </main>
        </>
    )
}

export default Home
