interface Props {
  subs: Array<{
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
  }>;
}

const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={sub.nick} />
          <h4>
            {sub.nick} (<small>{sub.subMonths}</small>)
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
