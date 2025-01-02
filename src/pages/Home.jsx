import ArticleCard from "../components/ArticleCard";


const data = [
  {
    id: 1,
    title: "Framework vs Library",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium libero reiciendis placeat commodi magnam quis, aperiam iste ipsam unde. Distinctio similique iste, nihil nisi a beatae, molestiae possimus fugiat molestias itaque qui reprehenderit ipsa corporis voluptate error quasi! Quibusdam, deserunt tempore consectetur quos iusto minus quidem beatae? Earum facere, error culpa corporis sapiente dolor natus illum adipisci. Aliquam dolor labore earum iusto quo facilis quod adipisci quia cumque? Laborum, nulla dolores beatae aspernatur dicta illum amet fuga libero. Quisquam autem quidem voluptate, temporibus est eum perspiciatis reprehenderit? Autem, aperiam? Libero, dignissimos. Quidem dolores impedit eum nemo enim architecto sapiente. Unde?",
    created_at: "2022-01-01",
  },
  {
    id: 2,
    title: "Programming Languages",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium libero reiciendis placeat commodi magnam quis, aperiam iste ipsam unde. Distinctio similique iste, nihil nisi a beatae, molestiae possimus fugiat molestias itaque qui reprehenderit ipsa corporis voluptate error quasi! Quibusdam, deserunt tempore consectetur quos iusto minus quidem beatae? Earum facere, error culpa corporis sapiente dolor natus illum adipisci. Aliquam dolor labore earum iusto quo facilis quod adipisci quia cumque? Laborum, nulla dolores beatae aspernatur dicta illum amet fuga libero. Quisquam autem quidem voluptate, temporibus est eum perspiciatis reprehenderit? Autem, aperiam? Libero, dignissimos. Quidem dolores impedit eum nemo enim architecto sapiente. Unde?",
    created_at: "2022-01-01",
  },
];

export default function Home() {
  return (
    <>
        {
        data.map((article) => (
            <ArticleCard article={article} key={article.id} />
        ))
    }
    </>
  )
}


