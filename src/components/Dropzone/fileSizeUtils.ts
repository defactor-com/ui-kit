type SizeUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

const units: Record<SizeUnits, number> = {
  B: 1,
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
  TB: 1024 * 1024 * 1024 * 1024,
};

function parseSizeLimit(text: string): number {
  const regex = /(\d+)\s?(B|KB|MB|GB|TB)/i;
  const match = text.match(regex);

  if (match && match[1] && match[2]) {
    const size = parseInt(match[1], 10);
    const unit = match[2].toUpperCase().trim() as SizeUnits;
    return size * (units[unit] || 1);
  }

  return 0; 
}

export default parseSizeLimit;
