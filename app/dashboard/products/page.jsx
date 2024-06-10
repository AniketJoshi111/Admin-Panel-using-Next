import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search for a user... "/>
      <Link href="/dashboard/products/add">
      <button className={styles.addButton}>Add Item</button>
      </Link>
      </div>
      <table className={styles.table}>
        <thead>
        <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div className={styles.product}>
              <Image src="/noavatar.png" width={40} height={40} className={styles.productImage}/>
              Iphone 
            </div>
          </td>
          <td>Bought from apple store</td>
          <td>100000</td>
          <td>Admin</td>
          <td>30</td>
          <td>
          <div className={styles.buttons}>
            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link> 
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={styles.product}>
              <Image src="/noavatar.png" width={40} height={40} className={styles.productImage}/>
              Iphone 
            </div>
          </td>
          <td>Bought from apple store</td>
          <td>100000</td>
          <td>Admin</td>
          <td>30</td>
          <td>
          <div className={styles.buttons}>
            <Link href="/">
              <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link> 
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage
