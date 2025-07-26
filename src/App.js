import React, { useState, useMemo, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { racersData } from './racersData';

// --- HELPER HOOKS ---
function usePersistentState(key, defaultValue) {
    const [state, setState] = useState(() => {
        try { 
            const val = window.localStorage.getItem(key); 
            return val !== null ? JSON.parse(val) : defaultValue; 
        } catch (e) { 
            return defaultValue; 
        }
    });
    useEffect(() => { 
        try { 
            window.localStorage.setItem(key, JSON.stringify(state)); 
        } catch (e) { 
            console.error("Failed to save state to localStorage:", e); 
        } 
    }, [key, state]);
    return [state, setState];
}

// --- UI & UX COMPONENTS ---

const FingerTrail = () => {
    const [particles, setParticles] = useState([]);
    const particleId = useRef(0);

    useEffect(() => {
        const createParticle = (x, y) => {
            const newParticle = { id: particleId.current++, x, y, color: `hsl(${Math.random() * 360}, 100%, 80%)` };
            setParticles(p => [...p, newParticle].slice(-20));
        };
        const handleMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            createParticle(x, y);
        };
        window.addEventListener('mousemove', handleMove);
        return () => {
            window.removeEventListener('mousemove', handleMove);
        };
    }, []);

    return ReactDOM.createPortal(
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]">
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    initial={{ x: p.x, y: p.y, scale: 1, opacity: 1 }}
                    animate={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{ backgroundColor: p.color, width: '12px', height: '12px' }}
                />
            ))}
        </div>,
        document.body
    );
};

const FavoriteButton = ({ racerId, isFavorite, toggleFavorite }) => {
    const handleToggle = (e) => { 
        e.stopPropagation(); 
        toggleFavorite(racerId); 
    };
    return (
        <button onClick={handleToggle} className="p-1 rounded-full z-10 transform transition-transform active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 transition-all duration-200 transform hover:scale-110 ${isFavorite ? 'text-pink-500 drop-shadow-lg' : 'text-gray-600 hover:text-pink-400'}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
        </button>
    );
};


// --- CORE COMPONENTS ---

const StatChart = ({ stats, customPercent, setCustomPercent, highlightedCol, setHighlightedCol }) => {
  const percentages = [100, 75, 50, 25];
  const statKeys = ['speed', 'stamina', 'power', 'guts', 'wit'];
  const statBaseColors = { speed: '#06b6d4', stamina: '#10b981', power: '#f43f5e', guts: '#fbbf24', wit: '#8b5cf6' };
  const statRowColors = { speed: 'bg-cyan-500/10', stamina: 'bg-emerald-500/10', power: 'bg-rose-500/10', guts: 'bg-amber-500/10', wit: 'bg-violet-500/10' };
  const statTextColors = { speed: 'text-cyan-300', stamina: 'text-emerald-300', power: 'text-rose-300', guts: 'text-amber-300', wit: 'text-violet-300' };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl shadow-inner border border-slate-700">
       <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
        <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">Stat Benchmarks</h3>
        <div className="flex items-center gap-2">
            <label htmlFor="custom-percent" className="text-slate-300 text-sm">Custom %:</label>
            <input id="custom-percent" type="number" value={customPercent} onChange={(e) => setCustomPercent(e.target.value === '' || (e.target.value >= 0 && e.target.value <= 999) ? e.target.value : customPercent)} className="w-20 bg-slate-700 text-white text-center rounded-md p-1 border border-slate-600 focus:ring-2 focus:ring-pink-500 focus:outline-none"/>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-2 bg-transparent text-slate-400 font-semibold rounded-tl-lg w-1/6 sticky left-0 z-10 bg-slate-800/50">Stat</th>
              {percentages.map(p => ( <th key={p} className="p-2 bg-transparent text-slate-400 font-semibold text-center cursor-pointer hover:bg-slate-700/50" onClick={() => setHighlightedCol(prev => prev === p ? null : p)}>{p}%{highlightedCol === p && <div className="h-1 bg-pink-500 rounded-full mt-1 mx-auto w-1/2"></div>}</th> ))}
              <th className="p-2 bg-transparent text-slate-400 font-semibold text-center rounded-tr-lg w-1/5 cursor-pointer hover:bg-slate-700/50" onClick={() => setHighlightedCol(prev => prev === 'custom' ? null : 'custom')}>Custom</th>
            </tr>
          </thead>
          <tbody>
            {statKeys.map((key) => (
              <tr key={key} className={`${statRowColors[key]}`} style={{ '--stat-glow-color': statBaseColors[key] }}>
                <td className={`p-3 font-bold capitalize ${statTextColors[key]} sticky left-0 z-10 ${statRowColors[key]}`}>{key}</td>
                {percentages.map((p, pIndex) => ( <td key={`${key}-${p}`} className={`p-3 text-center transition-colors ${(pIndex % 2 !== 0) ? 'bg-black/20' : ''} ${highlightedCol === p ? 'bg-pink-500/20 font-bold text-white text-shadow-glow-dynamic' : 'text-slate-200'}`}>{Math.round((stats?.[key] || 0) * (p / 100))}</td> ))}
                <td className={`p-2 text-center font-bold ${(percentages.length % 2 !== 0) ? 'bg-black/20' : ''} ${highlightedCol === 'custom' ? 'bg-pink-500/20 text-white text-shadow-glow-dynamic' : 'text-slate-200 text-shadow-glow-subtle-dynamic'}`}>
                    <span>{Math.round((stats?.[key] || 0) * (customPercent / 100))}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SkillSection = ({ title, skills }) => ( <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700"><h3 className="text-xl font-bold text-white mb-3">{title}</h3><div className="flex flex-wrap gap-2">{(skills || []).map(skill => (<span key={skill} className="text-sm font-medium px-3 py-1 rounded-full border bg-sky-500/20 text-sky-300 border-sky-500/30">{skill}</span>))}</div></div> );
const CardSection = ({ title, cards, strategy }) => ( <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700"><h3 className="text-xl font-bold text-white mb-4">{title}</h3><p className="text-slate-400 italic mb-4 text-sm">{strategy}</p><div><h4 className="text-lg font-semibold text-pink-400 mb-2">Core Card Lineup</h4><div className="flex flex-wrap gap-2">{(cards || []).map(card => (<div key={card} className="bg-slate-900/50 p-2 rounded-md text-slate-300 text-sm">{card}</div>))}</div></div></div> );
const DetailSubPage = ({ onBack, children }) => ( <div><button onClick={onBack} className="bg-slate-700/80 text-white font-bold py-3 px-8 text-lg rounded-xl hover:bg-pink-500 transition-colors shadow-lg mt-4 mb-8 transform active:scale-95">&larr; Back</button><div className="space-y-6">{children}</div></div> );
const RacerTipsPage = ({ racer, onBack }) => ( <DetailSubPage onBack={onBack}><h2 className="text-3xl font-extrabold text-white mb-6">{racer.nickname}'s Tips</h2><div className="space-y-4">{racer.tips.map((tip, index) => ( <div key={index} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700"><p className="text-slate-200">{tip}</p></div>))}</div></DetailSubPage>);
const RacerEventsPage = ({ racer, onBack }) => ( <DetailSubPage onBack={onBack}><h2 className="text-3xl font-extrabold text-white mb-6">{racer.nickname}'s Events</h2><div className="space-y-4">{racer.events.map(event => ( <div key={event.name} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700"><h4 className="text-lg font-bold text-pink-400 mb-2">{event.name}</h4><ul className="list-disc list-inside space-y-1 text-slate-300">{event.choices.map((c, i) => <li key={i}><strong>{c.choice}:</strong> {c.outcome}</li>)}</ul></div>))}</div></DetailSubPage>);
const RacerInfoPage = ({ racer, onBack }) => ( <DetailSubPage onBack={onBack}><h2 className="text-3xl font-extrabold text-white mb-6">{racer.nickname}'s Info</h2><div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-slate-300"><p className="text-lg italic text-center text-slate-400 mb-4">"{racer.extraInfo.quote}"</p><div className="grid grid-cols-2 gap-4 text-sm"><div><strong>V.A.:</strong> {racer.extraInfo.va}</div><div><strong>Birthday:</strong> {racer.extraInfo.birthday}</div><div><strong>Height:</strong> {racer.extraInfo.height}</div><div><strong>Weight:</strong> {racer.extraInfo.weight}</div></div><p className="mt-4 pt-4 border-t border-slate-700">{racer.extraInfo.bio}</p></div></DetailSubPage>);
const GenericInfoPage = ({ title, onBack, content }) => ( <div><button onClick={onBack} className="bg-slate-700/80 text-white font-bold py-3 px-8 text-lg rounded-xl hover:bg-pink-500 transition-colors shadow-lg mt-4 mb-8 transform active:scale-95">&larr; Back</button><h2 className="text-3xl font-extrabold text-white mb-6">{title}</h2><div className="space-y-4 text-slate-300 bg-slate-800/50 p-4 rounded-xl border border-slate-700">{content.map((item, index) => ( <div key={index}><h3 className="text-xl font-bold text-pink-400 mb-1">{item.title}</h3><p className="text-slate-400">{item.text}</p></div>))}</div></div> );
const distanceColors = { sprint: { color: '#fb923c', border: 'border-orange-400', bgHover: 'hover:bg-orange-500/20', shadow: 'shadow-orange-500/30', legendBg: 'bg-orange-400' }, mile: { color: '#818cf8', border: 'border-indigo-400', bgHover: 'hover:bg-indigo-500/20', shadow: 'shadow-indigo-500/30', legendBg: 'bg-indigo-400' }, med: { color: '#4ade80', border: 'border-green-400', bgHover: 'hover:bg-green-500/20', shadow: 'shadow-green-500/30', legendBg: 'bg-green-400' }, long: { color: '#f87171', border: 'border-red-400', bgHover: 'hover:bg-red-500/20', shadow: 'shadow-red-500/30', legendBg: 'bg-red-400' } };
const aptitudeScores = { 'A': 7, 'B': 6, 'C': 5, 'D': 4, 'E': 3, 'F': 2, 'G': 1 };
const getDistanceAptitudeClasses = (aptitudes) => { if (!aptitudes || !aptitudes.distance) { return { borderColorClass: 'border-slate-700', backgroundStyle: { backgroundColor: 'rgba(45, 53, 67, 0.8)' } }; } const sortedAptitudes = Object.keys(aptitudes.distance).map(dist => ({ distance: dist, score: aptitudeScores[aptitudes.distance[dist]] || 0 })).sort((a, b) => b.score - a.score); const topTwo = sortedAptitudes.slice(0, 2); if (topTwo.length === 0 || topTwo[0].score === 0) { return { borderColorClass: 'border-slate-700', backgroundStyle: { backgroundColor: 'rgba(45, 53, 67, 0.8)' } }; } if (topTwo.length === 1 || topTwo[0].score > topTwo[1].score) { const dominantDist = topTwo[0].distance; const colorInfo = distanceColors[dominantDist]; return { borderColorClass: colorInfo.border, backgroundStyle: { backgroundColor: colorInfo.color }, hoverClass: colorInfo.bgHover, shadowClass: colorInfo.shadow }; } else { const [dist1, dist2] = topTwo; const color1 = distanceColors[dist1.distance].color; const color2 = distanceColors[dist2.distance].color; const totalScore = dist1.score + dist2.score; const percent1 = (dist1.score / totalScore) * 100; const backgroundStyle = { backgroundImage: `linear-gradient(to bottom right, ${color1} ${percent1}%, ${color2} ${100 - percent1}%)`, }; return { borderColorClass: 'border-slate-600', backgroundStyle: backgroundStyle, hoverClass: 'hover:bg-slate-700/20', shadowClass: 'shadow-lg shadow-purple-500/30' }; } };

const RacerCard = ({ racer, onSelectRacer, isFavorite, toggleFavorite }) => {
    let cardStyles;
    if (racer.isCreator) { cardStyles = { borderColorClass: 'border-purple-400', backgroundStyle: { backgroundImage: 'linear-gradient(45deg, #f87171, #fb923c, #facc15, #4ade80, #38bdf8, #818cf8, #f472b6)' }, hoverClass: 'hover:opacity-90', shadowClass: 'shadow-lg shadow-purple-500/30' }; } else { cardStyles = getDistanceAptitudeClasses(racer.aptitudes); }
    const { borderColorClass, backgroundStyle, hoverClass, shadowClass } = cardStyles;
    return ( <div className="relative group h-full"><button onClick={() => onSelectRacer(racer)} className={`w-full h-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex flex-col justify-center transform active:scale-95 ${borderColorClass} ${hoverClass} ${shadowClass}`} style={backgroundStyle}><p className="text-xl font-extrabold text-white leading-tight pr-6 mb-1 text-outline">{racer.nickname}</p><p className="text-sm text-slate-200 leading-tight text-outline">{racer.name}</p><p className="text-xs text-slate-300 italic mt-1 text-outline">{racer.style}</p></button><div className="absolute top-1 right-1"><FavoriteButton racerId={racer.id} isFavorite={isFavorite} toggleFavorite={toggleFavorite} /></div></div> );
};

const EditableStatChart = ({ stats, setStats }) => {
    const statKeys = ['speed', 'stamina', 'power', 'guts', 'wit'];
    const [localStats, setLocalStats] = useState(stats);

    useEffect(() => { setLocalStats(stats); }, [stats]);

    const handleStatChange = (statKey, value) => {
        if (value === '' || /^\d+$/.test(value)) {
            if (parseInt(value, 10) > 9999) return;
            const newStats = { ...localStats, [statKey]: value };
            setLocalStats(newStats);
            setStats(newStats);
        }
    };
    
    return ( <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700"><h3 className="text-xl font-bold text-white mb-3">Base Stats (100% Target)</h3><div className="space-y-3">{statKeys.map(key => ( <div key={key} className="p-2 rounded-lg flex items-center justify-between bg-slate-900/50"><label className="capitalize font-bold text-slate-300">{key}</label><input type="text" inputMode="numeric" value={localStats?.[key] ?? ''} onChange={(e) => handleStatChange(key, e.target.value)} className="w-24 bg-slate-700 text-white text-center rounded-md p-1 border border-slate-600 focus:ring-2 focus:ring-pink-500"/></div> ))}</div></div> );
};

const EditableListSection = ({ title, items, setItems, placeholder }) => {
    const [newItem, setNewItem] = useState('');
    const handleAddItem = (e) => { e.preventDefault(); if (newItem.trim()) { setItems(prev => [...(prev || []), newItem.trim()]); setNewItem(''); } };
    const handleRemoveItem = (itemToRemove) => { setItems(prev => prev.filter(item => item !== itemToRemove)); };
    return ( <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700"><h3 className="text-xl font-bold text-white mb-3">{title}</h3><div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">{(items || []).map((item, index) => ( <div key={index} className="flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full border bg-sky-500/20 text-sky-300 border-sky-500/30"><span>{item}</span><button onClick={() => handleRemoveItem(item)} className="text-red-400 hover:text-red-300 font-bold">&times;</button></div> ))}</div><form onSubmit={handleAddItem} className="flex gap-2"><input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder={placeholder} className="flex-grow bg-slate-700 text-white rounded-md p-2 border border-slate-600 focus:ring-2 focus:ring-pink-500"/><button type="submit" className="bg-pink-500 text-white font-bold px-4 rounded-md hover:bg-pink-600 transform active:scale-95">+</button></form></div> );
};

// --- PAGE COMPONENTS ---

const RacerList = ({ onSelectRacer, favorites, toggleFavorite, customRacers, onViewPage }) => {
  const allRacers = useMemo(() => [...racersData, ...customRacers], [customRacers]);
  const favoriteRacers = useMemo(() => allRacers.filter(r => favorites.includes(r.id)).sort((a, b) => a.nickname.localeCompare(b.nickname)),[favorites, allRacers]);
  const creatorTemplate = racersData.find(r => r.isCreator);
  const sortedRacers = useMemo(() => { const distances = ['Sprint', 'Mile', 'Medium', 'Long']; const favoriteIds = new Set(favorites); const regularRacers = racersData.filter(r => !r.isCreator); return distances.map(dist => ({ distance: dist, racers: regularRacers.filter(r => r.distance === dist && !favoriteIds.has(r.id)).sort((a, b) => a.nickname.localeCompare(b.nickname)) })); }, [favorites]);
  const userCreatedRacers = useMemo(() => customRacers.filter(r => !favorites.includes(r.id)).sort((a, b) => a.nickname.localeCompare(b.nickname)),[customRacers, favorites]);

  return (
    <div>
      <div className="text-center mb-8"><h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">Umamusume Guide</h1><p className="text-slate-400 mt-2">Your #1 resource for training champions.</p></div>
      <div className="mb-8 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700"><h3 className="text-lg font-bold text-white mb-3 text-center">Distance Aptitude Legend</h3><p className="text-xs text-slate-400 text-center mb-3">Card colors indicate a racer's dominant distance aptitude.</p><div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm"><div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${distanceColors.sprint.legendBg}`}></div><span className="text-slate-300">Sprint</span></div><div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${distanceColors.mile.legendBg}`}></div><span className="text-slate-300">Mile</span></div><div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${distanceColors.med.legendBg}`}></div><span className="text-slate-300">Medium</span></div><div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${distanceColors.long.legendBg}`}></div><span className="text-slate-300">Long</span></div><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-indigo-400"></div><span className="text-slate-300">Blended</span></div><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div><span className="text-slate-300">Creator</span></div></div></div>
      <div className="space-y-8">
        {favoriteRacers.length > 0 && ( <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-700"><h2 className="text-2xl font-bold text-yellow-300 mb-4">⭐ Favorites</h2><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">{favoriteRacers.map(racer => ( <RacerCard key={racer.id} racer={racer} onSelectRacer={onSelectRacer} isFavorite={true} toggleFavorite={toggleFavorite} /> ))}</div></div> )}
        {sortedRacers.map(({ distance, racers }) => ( racers.length > 0 && <div key={distance} className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-700"><h2 className="text-2xl font-bold text-white mb-4">{distance} Racers</h2><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">{racers.map(racer => ( <RacerCard key={racer.id} racer={racer} onSelectRacer={onSelectRacer} isFavorite={favorites.includes(racer.id)} toggleFavorite={toggleFavorite} /> ))}</div></div> ))}
        <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-700"><h2 className="text-2xl font-bold text-white mb-4">Creator</h2><RacerCard key={creatorTemplate.id} racer={creatorTemplate} onSelectRacer={onSelectRacer} isFavorite={false} toggleFavorite={() => {}} /></div>
        {userCreatedRacers.length > 0 && ( <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-700"><h2 className="text-2xl font-bold text-white mb-4">Custom Racers</h2><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">{userCreatedRacers.map(racer => ( <RacerCard key={racer.id} racer={racer} onSelectRacer={onSelectRacer} isFavorite={favorites.includes(racer.id)} toggleFavorite={toggleFavorite} /> ))}</div></div> )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"><button onClick={() => onViewPage('tips')} className="w-full text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-purple-500/20 transition-colors duration-200 transform active:scale-95"><p className="font-bold text-white text-lg">General Tips & Tricks</p></button><button onClick={() => onViewPage('claw')} className="w-full text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-purple-500/20 transition-colors duration-200 transform active:scale-95"><p className="font-bold text-white text-lg">Claw Machine Guide</p></button></div>
      </div>
    </div>
  );
};

const RacerDetail = ({ racer, onBack, favorites, toggleFavorite, onViewSubPage, onEditRacer }) => {
  const [customPercent, setCustomPercent] = useState(15);
  const [highlightedCol, setHighlightedCol] = useState(25);
  const isCustomRacer = racer.id >= 200;

  return (
    <div>
      <div className="relative mt-4 mb-8">
        <button onClick={onBack} className="absolute top-0 left-0 bg-slate-700/80 text-white font-bold py-3 px-8 text-lg rounded-xl hover:bg-pink-500 transition-colors shadow-lg z-20 transform active:scale-95">&larr; Back</button>
        {isCustomRacer && <button onClick={() => onEditRacer(racer)} className="absolute top-0 right-0 bg-blue-500 text-white font-bold py-3 px-8 text-lg rounded-xl hover:bg-blue-600 transition-colors shadow-lg z-20 transform active:scale-95">Edit</button>}
        <div className="text-center pt-16 pb-4">
            <div className="flex items-center justify-center gap-2"><h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{racer.nickname}</h2><FavoriteButton racerId={racer.id} isFavorite={favorites.includes(racer.id)} toggleFavorite={toggleFavorite} /></div>
            <p className="text-lg text-slate-400 mt-1">{racer.name}</p><p className="text-md text-slate-500 mt-1">{racer.distance} &bull; {racer.style}</p>
        </div>
      </div>
      <div className="space-y-6">
        <StatChart stats={racer.stats} customPercent={customPercent} setCustomPercent={setCustomPercent} highlightedCol={highlightedCol} setHighlightedCol={setHighlightedCol}/>
        <SkillSection title="Recommended Skills" skills={racer.skills} />
        <CardSection title="Strategy & Card Recommendations" cards={racer.recommendedCards.cards} strategy={racer.recommendedCards.strategy} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <button onClick={() => onViewSubPage('tips')} className="w-full text-center p-3 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-pink-500/20 transition-colors duration-200 transform active:scale-95"><p className="font-bold text-white">Training Tips</p></button>
             <button onClick={() => onViewSubPage('events')} className="w-full text-center p-3 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-pink-500/20 transition-colors duration-200 transform active:scale-95"><p className="font-bold text-white">Events</p></button>
             <button onClick={() => onViewSubPage('info')} className="w-full text-center p-3 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-pink-500/20 transition-colors duration-200 transform active:scale-95"><p className="font-bold text-white">Profile</p></button>
        </div>
      </div>
    </div>
  );
};

const RacerCreator = ({ onBack, onCreateRacer }) => {
    const template = racersData.find(r => r.isCreator);
    const [creatorData, setCreatorData] = useState(JSON.parse(JSON.stringify(template)));
    const setField = (field, value) => setCreatorData(prev => ({ ...prev, [field]: value }));
    const setRecCards = (field, value) => setCreatorData(prev => ({...prev, recommendedCards: { ...prev.recommendedCards, [field]: value }}));
    const handleCreate = () => onCreateRacer(creatorData);

    return (
        <div>
            <div className="flex justify-between items-center mt-4 mb-8">
                <button onClick={onBack} className="bg-slate-700/80 text-white font-bold py-3 px-8 text-lg rounded-xl hover:bg-pink-500 transition-colors shadow-lg z-20 transform active:scale-95">&larr; Back</button>
                <button onClick={handleCreate} className="bg-green-500 text-white font-bold py-3 px-8 text-lg rounded-xl hover:bg-green-600 transition-colors shadow-lg z-20 transform active:scale-95">Make This Racer</button>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Racer Creator</h2>
            <div className="space-y-6">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 space-y-3">
                    <h3 className="text-xl font-bold text-white">Identity</h3>
                    <div><label className="text-pink-400 font-semibold text-sm">Nickname</label><input type="text" value={creatorData.nickname} onChange={e => setField('nickname', e.target.value)} className="w-full bg-slate-700 text-white rounded-md p-2 mt-1 border border-slate-600 focus:ring-2 focus:ring-pink-500"/></div>
                    <div><label className="text-pink-400 font-semibold text-sm">Full Name</label><input type="text" value={creatorData.name} onChange={e => setField('name', e.target.value)} className="w-full bg-slate-700 text-white rounded-md p-2 mt-1 border border-slate-600 focus:ring-2 focus:ring-pink-500"/></div>
                </div>
                <EditableStatChart stats={creatorData.stats} setStats={stats => setField('stats', stats)} />
                <EditableListSection title="Skills" items={creatorData.skills} setItems={skills => setField('skills', skills)} placeholder="Add a new skill..."/>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                     <h3 className="text-xl font-bold text-white mb-3">Strategy & Cards</h3>
                     <div className="space-y-3">
                        <EditableListSection title="Recommended Cards" items={creatorData.recommendedCards.cards} setItems={cards => setRecCards('cards', cards)} placeholder="Add a new card..."/>
                        <div><label className="text-pink-400 font-semibold text-sm">Strategy Note</label><textarea value={creatorData.recommendedCards.strategy} onChange={e => setRecCards('strategy', e.target.value)} className="w-full bg-slate-700 text-white rounded-md p-2 mt-1 border border-slate-600 focus:ring-2 focus:ring-pink-500 h-24"/></div>
                     </div>
                </div>
            </div>
        </div>
    );
};

const RacerEditor = ({ onBack, onSaveRacer, initialRacer }) => {
    const [racerData, setRacerData] = useState(JSON.parse(JSON.stringify(initialRacer)));
    const originalData = useRef(JSON.parse(JSON.stringify(initialRacer)));
    const hasChanges = JSON.stringify(racerData) !== JSON.stringify(originalData.current);
    
    const setField = (field, value) => setRacerData(prev => ({ ...prev, [field]: value }));
    const setRecCards = (field, value) => setRacerData(prev => ({...prev, recommendedCards: { ...prev.recommendedCards, [field]: value }}));
    
    const handleSave = () => onSaveRacer(racerData);
    const handleBack = () => {
        if(hasChanges && !window.confirm("You have unsaved changes. Are you sure you want to go back?")) return;
        onBack();
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-4 mb-8">
                <button onClick={handleBack} className="bg-slate-700/80 text-white font-bold py-3 px-8 text-lg rounded-xl hover:bg-pink-500 transition-colors shadow-lg z-20 transform active:scale-95">&larr; Back</button>
                <button onClick={handleSave} className={`text-white font-bold py-3 px-8 text-lg rounded-xl transition-colors shadow-lg z-20 transform active:scale-95 ${hasChanges ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 cursor-not-allowed'}`} disabled={!hasChanges}>Save Changes</button>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Edit: {initialRacer.nickname}</h2>
            <div className="space-y-6">
                <EditableStatChart stats={racerData.stats} setStats={stats => setField('stats', stats)} />
                <EditableListSection title="Skills" items={racerData.skills} setItems={skills => setField('skills', skills)} placeholder="Add a new skill..."/>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                     <h3 className="text-xl font-bold text-white mb-3">Strategy & Cards</h3>
                     <div className="space-y-3">
                        <EditableListSection title="Recommended Cards" items={racerData.recommendedCards.cards} setItems={cards => setRecCards('cards', cards)} placeholder="Add a new card..."/>
                        <div><label className="text-pink-400 font-semibold text-sm">Strategy Note</label><textarea value={racerData.recommendedCards.strategy} onChange={e => setRecCards('strategy', e.target.value)} className="w-full bg-slate-700 text-white rounded-md p-2 mt-1 border border-slate-600 focus:ring-2 focus:ring-pink-500 h-24"/></div>
                     </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState('list');
  const [selectedRacer, setSelectedRacer] = useState(null);
  const [racerSubView, setRacerSubView] = useState(null);
  const [favorites, setFavorites] = usePersistentState('umamusume-favorites', []);
  const [customRacers, setCustomRacers] = usePersistentState('umamusume-custom-racers', []);
  
  // --- NAVIGATION HANDLERS ---
  const handleNavigation = (newView, racer = null, subView = null) => {
    setView(newView);
    setSelectedRacer(racer);
    setRacerSubView(subView);
  };

  const handleSelectRacer = (racer) => {
      if (racer.isCreator) {
          handleNavigation('creator', racer);
      } else {
          handleNavigation('racerDetail', racer);
      }
  };

  const handleBackToList = () => handleNavigation('list');
  const handleViewPage = (page) => handleNavigation(page);
  const handleViewSubPage = (subPage) => handleNavigation('racerDetail', selectedRacer, subPage);
  const handleBackToRacer = () => handleNavigation('racerDetail', selectedRacer);
  
  const toggleFavorite = (racerId) => {
    setFavorites(prev => prev.includes(racerId) ? prev.filter(id => id !== racerId) : [...prev, racerId]);
  };
  
  const handleCreateRacer = (racerData) => {
    const sanitizedStats = {};
    for (const key in racerData.stats) { sanitizedStats[key] = parseInt(racerData.stats[key], 10) || 0; }
    const newRacer = { ...racerData, stats: sanitizedStats, id: 200 + customRacers.length, isCreator: false, distance: 'Custom' };
    setCustomRacers(prev => [...prev, newRacer]);
    handleBackToList();
  };
  
  const handleSaveRacer = (updatedRacer) => {
    setCustomRacers(prev => prev.map(r => r.id === updatedRacer.id ? updatedRacer : r));
    handleNavigation('racerDetail', updatedRacer);
  };

  // --- RENDER LOGIC ---
  const pageVariants = {
      initial: { opacity: 0, x: -30 },
      in: { opacity: 1, x: 0 },
      out: { opacity: 0, x: 30 },
  };
  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.35 };
  const commonListProps = { onSelectRacer: handleSelectRacer, favorites, toggleFavorite, customRacers, onViewPage: handleViewPage };

  const renderContent = () => {
    switch(view) {
        case 'tips': return <GenericInfoPage title="General Tips & Tricks" onBack={handleBackToList} content={[
            { title: 'Focus on Friendship Bonds Early', text: 'In the first year, prioritize training in facilities with your Support Cards to raise their Friendship Bonds. An orange bond gauge (around 80%) unlocks powerful "Friendship Training" sessions, which provide huge stat boosts, especially during the Summer Camp.' },
            { title: 'Prioritize Key Stats', text: 'While all stats are useful, Speed, Stamina, and Wit are crucial. Speed is your raw velocity, Stamina determines how long you can maintain it, and Wit influences skill activation and positioning. Power is vital for acceleration, especially for Pace Chasers and End Closers.' },
            { title: 'Stamina Benchmarks are Key', text: 'Ensure your racer has enough Stamina for their target distance. For Long races, aim for at least 800 Stamina. For Medium and Mile, 600-700 is a good target. Recovery skills like "Swinging Maestro" can allow you to compete with slightly lower Stamina.' },
            { title: 'Manage Your Energy and Mood', text: 'Rest when your training failure rate hits 15-25%. Use the "Recreation" option to keep your racer\'s mood at Good or Great, which boosts training gains and race performance. Training Wit also recovers a small amount of energy.' },
            { title: 'Use the Friend System', text: 'You can borrow one powerful Support Card and one Legacy Uma from friends for each training run. This is a massive advantage, especially for new players. Add active friends with strong characters to your list!' }
        ]}/>;
        case 'claw': return <GenericInfoPage title="Claw Machine Guide" onBack={handleBackToList} content={[
            { title: 'How to Trigger the Minigame', text: 'The Claw Machine game has a chance to appear after choosing the "Recreation" option. To increase your chances, use Recreation when you have a free turn and don\'t need to Rest.' },
            { title: 'How to Play', text: 'The goal is to grab plushies by timing your button press. Press and hold to move the claw, and release when the center of the claw is perfectly aligned with the middle of the plushie. The claw speeds up after each attempt, so be ready!' },
            { title: 'Rewards', text: 'Successfully grabbing plushies is a great way to boost your racer\'s mood, restore a bit of energy, and sometimes even grant skill hints from their corresponding support cards. It\'s a low-risk way to get a nice bonus.' }
        ]}/>;
        case 'creator': return <RacerCreator onBack={handleBackToList} onCreateRacer={handleCreateRacer} />;
        case 'racerEditor': return <RacerEditor onBack={() => handleNavigation('racerDetail', selectedRacer)} onSaveRacer={handleSaveRacer} initialRacer={selectedRacer} />;
        case 'racerDetail':
            if (!selectedRacer) return <RacerList {...commonListProps} />;
            if (racerSubView === 'tips') return <RacerTipsPage racer={selectedRacer} onBack={handleBackToRacer} />;
            if (racerSubView === 'events') return <RacerEventsPage racer={selectedRacer} onBack={handleBackToRacer} />;
            if (racerSubView === 'info') return <RacerInfoPage racer={selectedRacer} onBack={handleBackToRacer} />;
            return <RacerDetail racer={selectedRacer} onBack={handleBackToList} favorites={favorites} toggleFavorite={toggleFavorite} onViewSubPage={handleViewSubPage} onEditRacer={() => handleNavigation('racerEditor', selectedRacer)} />;
        default: 
            return <RacerList {...commonListProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
        <FingerTrail />
        <div className="container mx-auto max-w-4xl py-4 sm:py-8 px-2 sm:px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={view + (selectedRacer?.id || '') + (racerSubView || '')}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                  {renderContent()}
                </motion.div>
            </AnimatePresence>
        </div>
       <footer className="text-center py-6 text-slate-500 text-xs"><p>Umamusume: Pretty Derby content and materials are trademarks and copyrights of Cygames, Inc.</p><p>This is an unofficial fan-made guide.</p></footer>
    </div>
  );
}
