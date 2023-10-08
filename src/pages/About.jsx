import React from 'react'
import Layout from '../components/layout/layout'
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <Layout>
        <Box sx ={{
          my: 15,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:"2rem",
          },
          "& p":{
            textAlign:'justify'
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem",
            },
          },
        }}>
          <Typography variant="h4">
            Welcome To My Resturant
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis perspiciatis quasi illum cum? Distinctio odio atque numquam, illo iusto quo deserunt nihil explicabo minus aut culpa minima enim quae eos officiis totam repellendus. Corporis aliquam, placeat sed fugit, optio fuga ipsa accusantium eum nihil animi facere repudiandae provident eius, sunt est harum. Laudantium recusandae cumque exercitationem debitis quaerat impedit, eos temporibus voluptate pariatur excepturi. Itaque similique id mollitia deserunt alias veritatis architecto incidunt at adipisci repellendus, necessitatibus minima debitis fuga? Sed laborum adipisci, cum consectetur dolor repellat est? Nihil saepe consequuntur rem quibusdam laborum voluptatibus, labore ab aperiam accusamus.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque qui maxime earum, ut aperiam amet praesentium tempore quaerat minus, placeat hic velit porro saepe dolorem incidunt architecto atque, sapiente quasi iusto cum. Amet voluptates magni eum expedita facilis, fugiat aliquam quis saepe quibusdam. Magnam eius fugiat quisquam nesciunt ullam aut dolore odio ab reprehenderit cupiditate tenetur pariatur aperiam molestiae quos vel maiores, minima nobis veniam? Excepturi, quam. Veritatis, fugiat. Animi saepe tenetur eius libero. Labore minima accusamus voluptatibus illum quod sit ad ipsum veritatis facere asperiores nemo maxime, magni impedit perferendis deserunt illo facilis error sint ut recusandae est? Blanditiis.
          </p>
        </Box>
    </Layout>
  )
}

export default About;
