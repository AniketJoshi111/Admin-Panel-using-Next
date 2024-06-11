
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
            <Image src="/noavatar.png" alt=""  fill/>
        </div>
        John wick
      </div>
      <div className={styles.formContainer}>
      <form className={styles.form}>
        <label>Username</label>
        <input type="text" name="username" placeholder="John wick" />
        <label>Email</label>
        <input type="text" name="email" placeholder="Johnwick123@gmail.com" />
        <label>Password</label>
        <input type="text" name="password" placeholder="wickedsunny" />
        <label>Phone</label>
        <input type="text" name="phone" placeholder="9824268122" />
        <label>Address</label>
        <input type="text" name="address" placeholder="New York" />
        <label >Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
        </select>
        <button className={styles.button}>Update</button>
        </form>
        
      </div>
    </div>
  )
}

export default SingleUserPage
