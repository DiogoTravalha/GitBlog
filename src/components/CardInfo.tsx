import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft, ArrowSquareOut, Calendar } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface CardProfileRepoProps {
  data: {
    created_at: Date;
    name: string;
    description: string;
    html_url: string;
  };
}

export default function CardInfo({ data }: CardProfileRepoProps) {
  const navigate = useNavigate();
  console.log(data);
  return (
    <>
      <div className="flex w-full bg-[#0B1B2B] h-52 rounded-lg p-8 gap-8 -mt-20">
        <div className="flex flex-col w-full text-white items-center">
          <div className="flex w-full justify-between items-center text-[#E7EDF4]">
            <p className="flex gap-2" onClick={() => navigate(-1)}>
              <ArrowLeft size={20} color="#3294F8" />
              <p className="gap-2 items-center text-[#3294F8] font-black m-0">
                Voltar
              </p>
            </p>
            <a href={data.html_url} target="_black" className="flex gap-2">
              <p className="gap-2 items-center text-[#3294F8] font-black m-0">
                Ver no Github
              </p>
              <ArrowSquareOut size={20} color="#3294F8" />
            </a>
          </div>
          <div className="w-full flex-1 flex items-center justify-start text-sm font-light text-[#AFC2D4]">
            <strong className="text-white text-lg font-extrabold">
              {data.name}
            </strong>
          </div>
          <div className="flex w-full gap-6 text-sm text-[#A2B8CD]">
            <span className="flex h-5 gap-2 ">
              <img src="./imgs/icon.svg" className="w-5" />
              <p>diogotravalha</p>
            </span>
            <div className="flex h-5 gap-2">
              <Calendar size={20} color="#A2B8CD" />
              <p>
                {formatDistanceToNow(new Date(data.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <p className="text-[#A2B8CD] text-center">{data.description}</p>
      </div>
    </>
  );
}
