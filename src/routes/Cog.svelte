<script>
  export let size = 100;
  export let speed = 10;
  export let color = '#4a5568';
  export let glowColor = '#f6ad55';

  $: viewBox = `0 0 ${size} ${size}`;
  $: center = size / 2;
  $: outerRadius = size / 2;
  $: innerRadius = outerRadius * 0.7;
  $: toothHeight = outerRadius - innerRadius;

  function generateCogPath() {
    const numTeeth = 12;
    const angleStep = (Math.PI * 2) / numTeeth;
    let path = `M ${center + outerRadius} ${center} `;

    for (let i = 0; i < numTeeth; i++) {
      const angle1 = i * angleStep;
      const angle2 = angle1 + angleStep / 2;
      const angle3 = angle1 + angleStep;

      const outerX1 = center + outerRadius * Math.cos(angle1);
      const outerY1 = center + outerRadius * Math.sin(angle1);
      const innerX = center + innerRadius * Math.cos(angle2);
      const innerY = center + innerRadius * Math.sin(angle2);
      const outerX2 = center + outerRadius * Math.cos(angle3);
      const outerY2 = center + outerRadius * Math.sin(angle3);

      path += `L ${outerX1} ${outerY1} L ${innerX} ${innerY} L ${outerX2} ${outerY2} `;
    }

    path += 'Z';
    return path;
  }

  $: cogPath = generateCogPath();
</script>

<svg {viewBox} class="cog" style="--speed: {speed}s;">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <path d={cogPath} fill={color} filter="url(#glow)" />
  <circle cx={center} cy={center} r={innerRadius * 0.2} fill={glowColor} filter="url(#glow)" />
</svg>

<style>
  .cog {
    animation: spin var(--speed) linear infinite;
    filter: drop-shadow(0 0 5px rgba(246, 173, 85, 0.7));
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>