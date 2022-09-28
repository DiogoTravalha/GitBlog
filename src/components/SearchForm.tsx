import { useForm } from "react-hook-form";

interface SearchFormProps {
  num: number;
  handleSearchRepos: (data: string) => void;
}

interface SearchFormInputs {
  query: string;
}

export default function SearchForm({
  num,
  handleSearchRepos,
}: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>();

  return (
    <div className="w-full max-w-4xl mt-16">
      <div className="flex justify-between items-center">
        <strong className="text-white">Publicações</strong>
        <span className="text-[#7B96B2] text-sm">{num} publicações</span>
      </div>
      <form onSubmit={handleSubmit((e) => handleSearchRepos(e.query))}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="flex w-full bg-[#071422] p-3 text-[#3A536B] border-[#1c2e41] outline-none border-solid border-2 rounded-lg mt-3 placeholder:text-[#3A536B] text-sm"
          {...register("query")}
        />
      </form>
    </div>
  );
}
