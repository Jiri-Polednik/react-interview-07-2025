'use client';
import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../actions';

type Props = {};

const AddCourseForm: React.FC<Props> = () => {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [playlistId, setPlaylistId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (slug.trim() && title.trim() && playlistId.trim()) {
      dispatch(
        addCourse({
          slug: slug.trim(),
          title: title.trim(),
          playlistId: playlistId.trim(),
        })
      );
      setSlug('');
      setTitle('');
      setPlaylistId('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new course</h2>
      <label>
        Course slug:
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
      </label>
      <label>
        Course title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        YouTube playlist ID:
        <input
          type="text"
          value={playlistId}
          onChange={(e) => setPlaylistId(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add course</button>
    </form>
  );
};

export default AddCourseForm;
