

import styles from "@/app/ui/dashboard/products/singleproduct/singleproduct.module.css";
import Image from "next/image";

const SingleProductPage =  () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        
      </div>
      <div className={styles.formContainer}>
        <form  className={styles.form}>
          <input type="hidden" name="id"  />
          <label>Title</label>
          <input type="text" name="title" placeholder="Enter Title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price"/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder="0"/>
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder= "color"
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder= "size"
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;