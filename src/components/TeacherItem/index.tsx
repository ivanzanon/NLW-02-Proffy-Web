import React from 'react';
import whatsappIco from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
import api from '../../services/api';


export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    const handleCreateNewConnection = () => {
        api.post('/connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço por hora
                    <strong>{teacher.cost}</strong>
                </p>
                <a 
                    target='blank'
                    onClick={handleCreateNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`} 
                >
                    <img src={whatsappIco} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>   
    )
}

export default TeacherItem;