import React from "react";
import { useRouter } from "next/router";
const slug = () => {
  const router = useRouter();
  //   console.log("router:", router.query);
  const { slug } = router.query;

  return (
    <div>
      <h1>Title of the page</h1>
      <h3>{slug}</h3>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        quidem quae voluptatum eos nihil debitis porro saepe culpa ullam,
        tenetur tempora cumque? Perferendis, facilis inventore distinctio minus
        consectetur consequatur animi? Debitis quaerat repellendus ipsa minima
        illo temporibus cupiditate at deserunt sunt quibusdam labore quas,
        ducimus est autem optio fugiat saepe quis sequi corporis consectetur
        repudiandae vero quo. Dolorem, quasi eos. Enim iusto voluptatibus et
        magni nam natus architecto autem voluptatem dolor, perspiciatis ratione
        quis porro doloribus. Aliquid voluptatum pariatur id. Consectetur
        quaerat inventore commodi omnis, dolor magni asperiores corrupti alias.
        Eum dolor cum nihil optio molestias ratione, tempora ad nulla odio
        tempore facere iure velit vel? Eius minus ut veritatis, totam, eum nulla
        repellendus voluptatem vero dicta impedit, velit adipisci? Debitis
        consectetur beatae, facilis magni quia similique eligendi impedit
        reiciendis ex aperiam natus atque rerum aspernatur molestiae a neque est
        eius. Reprehenderit rerum quia voluptatibus quis quam officia temporibus
        beatae.
      </div>
    </div>
  );
};

export default slug;
