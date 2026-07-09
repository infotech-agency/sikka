"use client"
import React, { useState } from 'react';

interface MapLocation {
  id: string;
  name: string;
  top: string;  // Vertical position (%) — derived from real lat/long, calibrated to this SVG viewBox
  left: string; // Horizontal position (%)
  details: string;
}

const IndiaMapSection: React.FC = () => {
  // Coordinates are calibrated for this specific SVG viewBox (0 0 612 650).
  // Each city's top/left % was computed from its real latitude/longitude,
  // projected with the same linear transform used to build the outline path below,
  // so the pins line up correctly with real Indian geography.
  const locations: MapLocation[] = [
    { id: '1', name: 'Delhi NCR', top: '28.2%', left: '32.7%', details: 'Corporate Head Office & Digital Strategy Hub.' },
    { id: '2', name: 'Mumbai', top: '56.0%', left: '19.4%', details: 'Regional Media Buying & Client Relations.' },
    { id: '3', name: 'Bengaluru', top: '73.7%', left: '33.9%', details: 'Core Technology & Performance Marketing Team.' },
    { id: '4', name: 'Kolkata', top: '45.8%', left: '67.2%', details: 'Content Production & Regional Operations.' },
  ];

  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);

  return (
    <section className="w-full py-16 bg-slate-950 text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side: Content */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Our Presence</span>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Connecting Brands Across the Nation
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Strategically positioned in major economic zones to deliver premium, high-impact marketing and tech solutions.
            </p>
          </div>

          {/* Interactive Info Display */}
          <div className="h-32 bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 shadow-inner">
            {activeLocation ? (
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  {activeLocation.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{activeLocation.details}</p>
              </div>
            ) : (
              <p className="text-slate-500 text-sm flex items-center h-full justify-center border border-dashed border-slate-800/60 rounded-lg">
                Hover over the glowing pointers to explore our hubs
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Detailed India Map */}
        <div className="lg:col-span-7 flex justify-center items-center relative w-full max-w-[500px] mx-auto aspect-[612/650]">

          {/* Accurate India outline, derived from real geographic boundary data
              (mainland + Andaman & Nicobar Islands), simplified for clean rendering */}
          <svg
            className="w-full h-full text-slate-800/50 drop-shadow-[0_0_25px_rgba(245,158,11,0.05)]"
            viewBox="0 0 612 650"
            fill="currentColor"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M80.7,332.9 L67.5,326.7 L58.7,317.4 L59.6,316.5 L59.1,315.1 L57.1,315.3 L58.6,317.2 L56.3,315.7 L44.0,302.7 L46.4,299.4 L49.6,303.6 L54.6,300.3 L56.1,302.5 L58.9,299.6 L60.3,301.0 L67.2,298.1 L73.4,288.2 L70.6,290.9 L67.0,289.1 L58.5,294.8 L48.8,292.6 L37.3,285.4 L38.2,284.0 L40.0,284.0 L40.6,283.4 L36.8,282.3 L35.5,277.6 L40.7,273.1 L36.3,275.3 L38.8,272.3 L36.4,271.7 L40.4,271.4 L41.9,264.9 L42.9,267.0 L56.5,265.5 L63.7,267.6 L74.7,262.8 L74.9,265.9 L77.8,266.5 L85.3,263.3 L82.9,260.5 L85.0,257.8 L76.8,244.4 L76.7,238.6 L69.4,238.6 L65.9,234.0 L67.2,222.5 L54.8,218.8 L56.1,210.9 L71.0,194.9 L74.7,194.7 L80.8,200.8 L99.9,195.9 L109.2,180.7 L119.7,175.7 L128.2,158.5 L138.9,153.8 L138.5,148.5 L152.6,137.0 L149.2,135.8 L151.8,129.7 L149.5,124.7 L151.0,121.7 L165.4,115.2 L160.1,110.4 L152.7,110.2 L152.9,103.6 L149.7,105.5 L146.3,100.3 L140.0,96.8 L143.2,92.0 L138.9,87.0 L144.7,82.2 L137.8,81.1 L139.2,76.7 L135.2,74.7 L138.9,68.5 L145.5,66.6 L172.7,71.9 L186.5,66.7 L190.4,67.3 L191.7,64.2 L196.3,63.9 L212.0,53.3 L217.3,53.6 L215.1,56.2 L220.0,68.6 L234.0,75.7 L228.6,80.3 L229.1,88.9 L235.6,96.3 L241.9,97.2 L240.9,101.0 L244.9,106.8 L233.8,113.0 L230.1,110.5 L229.4,106.3 L223.1,109.0 L225.1,111.6 L223.6,114.8 L229.9,119.5 L228.4,123.4 L231.0,126.8 L228.8,129.2 L232.5,133.5 L236.6,130.1 L242.0,137.7 L250.4,138.8 L257.3,142.9 L257.2,146.4 L272.4,152.5 L260.1,162.0 L260.8,165.0 L257.7,167.8 L258.7,172.3 L255.9,174.3 L254.5,179.5 L262.9,184.7 L263.9,182.1 L276.0,188.3 L278.0,192.6 L280.4,192.0 L288.8,197.8 L292.2,196.6 L299.4,201.2 L304.3,200.4 L304.8,204.5 L313.4,205.4 L315.8,207.8 L317.2,204.9 L326.1,207.5 L331.5,204.2 L340.5,207.6 L340.9,213.1 L351.3,216.5 L351.7,218.6 L359.6,216.4 L363.7,222.2 L372.7,221.2 L380.4,224.9 L386.8,221.8 L387.2,224.4 L391.9,226.3 L402.2,223.7 L404.9,226.0 L407.9,218.7 L404.1,211.8 L408.1,199.1 L406.6,196.0 L416.1,192.6 L421.1,197.7 L418.8,203.3 L421.7,207.8 L418.5,211.3 L425.7,217.6 L430.3,216.5 L437.9,219.7 L449.9,215.9 L455.6,218.4 L481.0,216.9 L482.2,208.6 L480.3,204.9 L473.3,204.8 L471.3,197.8 L478.4,200.5 L483.9,197.8 L490.5,198.5 L493.9,195.3 L492.9,192.7 L503.0,188.8 L505.2,183.0 L516.3,182.4 L521.8,174.6 L529.6,169.6 L532.8,173.1 L545.1,175.5 L547.9,171.3 L557.2,167.5 L560.1,171.8 L563.0,171.4 L557.7,174.7 L558.7,178.0 L565.5,174.7 L567.2,180.4 L560.5,187.3 L563.1,188.6 L568.1,186.3 L582.0,191.3 L580.2,193.6 L581.8,197.1 L572.5,202.3 L577.2,212.1 L569.0,206.8 L560.0,208.6 L539.5,221.2 L537.9,224.4 L540.1,231.4 L534.8,241.1 L529.7,244.5 L531.3,252.9 L520.8,273.5 L513.1,270.5 L508.4,271.7 L505.4,268.6 L506.3,287.0 L504.4,289.5 L501.3,288.7 L502.8,303.6 L497.1,309.5 L493.5,305.6 L491.4,309.0 L485.1,276.0 L481.3,277.4 L479.2,275.9 L479.4,280.5 L475.6,284.6 L476.8,287.8 L472.7,290.7 L468.9,284.3 L468.2,288.4 L464.2,278.2 L468.1,268.7 L472.3,269.2 L473.6,266.4 L475.4,268.0 L475.1,266.0 L478.1,268.1 L478.4,264.4 L483.1,262.7 L484.6,253.5 L489.2,254.2 L488.1,251.2 L481.3,248.2 L450.7,249.1 L439.0,246.2 L440.0,234.0 L436.1,228.5 L434.2,233.5 L429.9,232.7 L426.2,230.2 L425.1,225.5 L422.5,224.2 L421.7,225.9 L424.5,228.1 L420.3,228.5 L411.9,221.1 L410.6,223.9 L414.2,226.1 L407.7,230.2 L406.5,236.7 L409.4,236.5 L414.6,242.2 L419.6,242.0 L423.4,246.3 L421.8,248.6 L412.7,248.1 L411.9,252.8 L407.0,253.0 L404.5,258.1 L410.6,263.5 L418.2,265.5 L418.9,271.0 L415.2,273.4 L414.9,277.5 L419.4,280.3 L417.9,284.8 L423.1,285.6 L420.3,289.6 L422.2,296.0 L419.6,294.3 L422.0,297.7 L420.4,300.3 L418.8,297.9 L417.0,297.8 L420.9,301.8 L418.2,304.8 L416.3,304.4 L417.3,303.0 L416.9,302.1 L416.2,304.3 L416.4,304.6 L417.0,304.7 L416.0,306.5 L415.7,305.5 L415.1,304.9 L415.8,310.2 L413.7,310.8 L414.2,310.1 L414.2,309.8 L413.6,309.1 L414.6,308.9 L414.8,307.8 L413.6,309.1 L414.2,310.1 L413.3,310.5 L413.2,309.3 L412.7,309.2 L413.0,308.3 L412.0,310.7 L411.6,310.4 L412.0,310.0 L411.8,309.1 L411.4,309.1 L411.7,312.3 L411.0,311.9 L411.3,310.4 L410.9,309.9 L409.3,313.6 L407.4,310.8 L408.1,305.4 L405.6,304.5 L406.3,302.8 L404.0,303.9 L403.3,300.8 L402.1,300.2 L403.2,303.6 L407.9,306.7 L405.5,308.3 L404.2,306.6 L403.5,306.6 L405.3,308.4 L400.6,314.1 L387.4,317.6 L383.7,321.0 L382.0,324.0 L384.7,331.3 L382.2,331.7 L380.8,334.7 L386.3,332.9 L373.9,346.7 L371.2,345.3 L373.4,347.2 L355.5,353.4 L342.4,362.6 L331.1,378.3 L320.6,383.8 L313.8,391.9 L297.9,400.8 L295.6,404.3 L297.6,405.8 L297.7,403.7 L297.8,404.9 L297.4,408.0 L295.5,408.5 L296.8,411.2 L285.6,416.1 L282.2,415.1 L279.7,415.4 L279.2,415.1 L278.9,415.1 L270.9,427.2 L266.1,424.1 L258.2,428.1 L254.0,439.4 L256.9,448.6 L255.4,457.6 L259.1,470.4 L255.9,464.9 L254.1,467.5 L259.3,471.7 L259.3,470.2 L259.6,473.1 L256.0,488.7 L249.1,499.8 L250.9,529.6 L246.1,528.5 L245.8,529.3 L244.6,529.4 L248.2,530.1 L244.1,529.6 L244.5,528.8 L239.6,530.5 L239.2,534.6 L232.3,545.0 L237.8,548.9 L231.0,549.2 L220.2,553.9 L216.6,566.1 L206.8,571.7 L196.1,566.0 L187.8,556.1 L183.9,546.4 L182.0,536.0 L184.1,540.8 L183.6,537.8 L184.5,538.7 L184.3,539.1 L184.3,541.0 L185.0,541.5 L184.2,544.3 L187.0,544.2 L185.4,543.7 L185.0,538.8 L181.4,532.6 L181.7,535.8 L174.8,513.8 L168.0,501.3 L164.6,499.3 L165.0,496.6 L164.3,498.5 L162.4,497.4 L155.2,481.4 L146.8,448.9 L145.5,449.9 L138.0,439.2 L135.6,433.1 L137.7,433.0 L129.4,420.9 L123.3,387.4 L119.5,380.0 L122.4,381.3 L122.4,377.9 L119.2,377.5 L118.0,371.0 L121.4,365.2 L120.1,364.1 L117.1,367.3 L117.8,360.2 L116.7,361.6 L114.2,349.3 L118.8,335.2 L116.4,326.2 L114.8,324.4 L113.7,326.0 L113.0,322.2 L115.9,317.0 L113.2,317.0 L117.7,314.8 L111.5,314.4 L111.4,308.9 L113.1,304.6 L116.1,305.2 L117.2,303.9 L118.5,304.3 L119.2,303.3 L111.1,304.8 L111.2,303.8 L110.8,304.0 L110.1,302.8 L109.2,302.6 L109.7,301.7 L108.7,301.4 L109.8,304.2 L108.4,306.2 L107.9,305.7 L107.9,305.1 L107.4,304.7 L107.8,305.1 L107.7,305.8 L108.0,306.1 L107.1,309.8 L107.6,306.5 L104.7,308.8 L107.7,315.5 L104.0,323.7 L80.7,332.9 Z M496.9,480.0 L497.8,481.7 L497.6,482.9 L498.5,484.1 L498.0,485.8 L498.2,488.1 L497.5,488.4 L498.0,488.7 L497.2,489.1 L497.2,489.9 L496.5,489.1 L496.7,489.0 L496.1,488.9 L495.7,488.2 L496.0,488.9 L496.9,489.7 L495.0,489.3 L494.9,488.7 L494.9,489.2 L495.6,489.4 L496.2,490.7 L496.7,490.9 L496.8,491.5 L495.7,491.8 L494.5,491.5 L494.2,491.9 L493.5,491.9 L493.1,491.3 L493.3,486.2 L492.9,486.0 L494.2,484.9 L494.6,484.9 L494.8,485.8 L494.8,484.8 L494.6,484.1 L494.5,484.8 L493.8,484.8 L494.0,483.9 L493.6,481.9 L493.9,482.2 L494.3,481.3 L494.7,482.3 L494.5,481.2 L494.7,481.5 L494.9,480.7 L496.4,480.9 L496.9,480.5 L496.9,480.0 Z M499.4,467.9 L499.6,469.1 L499.2,470.5 L500.2,471.0 L499.4,471.6 L499.9,471.4 L500.5,472.3 L500.1,472.9 L500.0,472.4 L499.6,472.5 L499.6,471.7 L498.6,472.4 L498.2,471.8 L497.9,472.1 L498.2,472.5 L499.0,472.6 L499.2,473.0 L499.1,473.4 L500.1,473.5 L499.4,475.2 L499.5,477.1 L498.9,478.1 L498.2,478.0 L498.3,478.4 L497.6,477.8 L497.6,477.0 L497.6,477.5 L497.2,477.3 L496.8,477.6 L497.2,477.6 L497.0,478.2 L497.7,479.2 L497.2,479.6 L497.1,478.9 L496.6,479.0 L496.1,480.0 L496.4,480.8 L495.8,481.0 L494.9,480.2 L494.9,478.9 L495.4,478.9 L495.5,478.4 L494.8,478.3 L495.0,476.9 L495.2,477.2 L495.5,476.8 L495.2,476.2 L495.9,476.0 L495.2,475.7 L495.7,475.3 L495.4,475.2 L495.6,474.2 L496.1,473.8 L495.5,473.4 L495.8,472.9 L495.5,472.8 L495.8,471.5 L496.3,471.3 L495.9,471.0 L496.3,471.0 L496.6,470.5 L496.4,469.7 L497.5,469.1 L497.3,468.5 L498.6,468.7 L498.6,467.8 L499.0,468.4 L499.4,467.9 Z M493.2,493.1 L493.2,494.4 L494.2,494.2 L493.8,496.3 L494.7,496.6 L494.3,497.1 L493.9,496.8 L493.8,497.2 L494.5,497.6 L494.1,498.0 L493.7,497.6 L493.4,498.8 L493.6,500.4 L493.3,501.0 L492.8,501.0 L493.0,501.1 L493.3,501.0 L493.5,500.8 L494.0,498.8 L494.7,498.7 L494.8,499.4 L494.2,503.2 L493.2,503.1 L493.3,503.8 L492.5,504.1 L493.0,504.7 L493.1,504.1 L493.7,504.0 L493.5,503.9 L493.6,503.5 L494.2,503.9 L493.4,507.4 L493.1,506.9 L492.1,506.6 L492.2,505.6 L491.6,505.8 L491.4,504.7 L491.9,504.8 L492.1,504.4 L491.9,504.1 L491.8,504.6 L491.4,504.4 L491.0,502.9 L490.5,503.3 L490.2,500.7 L489.8,500.8 L489.6,500.4 L490.5,498.5 L491.5,500.0 L491.7,495.6 L492.4,493.5 L492.3,494.1 L493.2,493.1 Z M514.9,587.6 L515.5,588.2 L515.6,590.4 L516.7,592.1 L516.1,592.0 L516.7,592.9 L515.8,593.9 L515.9,595.6 L515.5,596.0 L514.9,595.5 L514.5,596.7 L514.0,596.5 L514.2,595.5 L513.7,595.2 L513.8,594.9 L513.4,594.4 L513.6,594.1 L512.8,593.5 L512.9,592.8 L511.9,591.8 L511.4,591.9 L511.2,590.2 L511.6,589.9 L511.2,589.7 L511.8,588.5 L512.7,588.5 L513.2,588.0 L514.0,588.2 L514.1,587.6 L514.9,587.6 Z M489.9,518.5 L489.9,519.0 L490.0,518.6 L490.5,519.1 L490.5,520.2 L491.0,520.5 L491.2,522.5 L490.1,523.8 L490.7,524.4 L489.6,525.7 L488.1,525.0 L487.2,525.3 L487.9,523.7 L487.1,522.7 L487.0,520.6 L487.4,521.0 L488.6,519.1 L489.9,518.5 Z M33.1,274.4 L33.8,274.8 L34.3,274.5 L34.3,274.8 L33.8,275.4 L34.2,275.2 L34.2,275.9 L33.7,277.1 L33.4,277.5 L33.6,276.6 L32.8,278.3 L31.6,278.6 L31.5,277.7 L32.2,277.8 L31.5,277.7 L31.3,278.2 L30.9,278.2 L31.1,278.4 L30.0,278.3 L30.1,277.4 L30.2,277.5 L31.2,277.5 L32.2,277.3 L30.6,277.5 L31.4,277.3 L32.3,276.0 L32.6,276.2 L33.1,274.4 Z M406.9,310.9 L407.6,312.1 L407.5,313.4 L407.0,314.6 L407.2,315.1 L406.4,315.6 L405.1,315.1 L405.0,314.7 L405.7,312.7 L406.9,310.9 Z M494.7,491.7 L496.3,491.8 L496.7,492.5 L496.2,492.9 L496.6,493.8 L495.9,493.8 L496.0,494.6 L495.5,494.4 L495.3,495.5 L494.4,496.3 L493.9,495.7 L494.5,493.1 L493.9,492.9 L494.1,492.4 L494.4,492.5 L494.6,492.2 L494.7,491.7 Z" />
          </svg>

          {/* Calibrated Animated Pointers */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="absolute group z-10 cursor-pointer -translate-x-1/2 -translate-y-1/2"
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setActiveLocation(loc)}
              onMouseLeave={() => setActiveLocation(null)}
              onClick={() => setActiveLocation(loc)}
            >
              {/* Ping Ripple Animation */}
              <span className="absolute inline-flex h-9 w-9 rounded-full bg-amber-500/40 animate-ping -left-2.5 -top-2.5 opacity-75 pointer-events-none" />

              {/* Pulse Glow */}
              <span className="absolute inline-flex h-6 w-6 rounded-full bg-amber-500/20 animate-pulse -left-1 -top-1 pointer-events-none" />

              {/* Central Pin */}
              <div className="relative w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-2 border-slate-950 shadow-lg shadow-amber-500/50 group-hover:scale-125 transition-all duration-200">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow" />
              </div>

              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-slate-900/95 border border-slate-800 text-[11px] font-semibold text-amber-400 px-2 py-1 rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none tracking-wide backdrop-blur-sm">
                {loc.name}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;