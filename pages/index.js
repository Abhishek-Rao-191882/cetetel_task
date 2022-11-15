import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout.js';
import Dashboard from '../components/category/Category.js';

export default function Home() {
  return (
    <Layout title='Home Layout'>
       <Dashboard/>
    </Layout>
  )
}
