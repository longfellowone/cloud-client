const Input = ({ label, register, required }: any) => (
  <>
    <label className="">{label}:</label>
    <input
      {...register(label, { required })}
      id={label}
      className="bg-gray-300 ml-2 p-2 outline"
    />
  </>
)

export default Input
