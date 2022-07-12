export default function NewBook() {
  return (
    <form>
      <input
        type="text"
        className="input-text"
        placeholder="Title"
        name="title"
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author"
        name="author"
      />
    </form>
  );
}
