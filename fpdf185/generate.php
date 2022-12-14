<?php
	
	require('fpdf.php');
	
	class TextNormalizerFPDF extends FPDF
	{
		function __construct()
		{
			parent::__construct();
		}

		function MultiCell($w, $h, $txt, $border=0, $align='J', $fill=false)
		{
			parent::MultiCell($w, $h, $this->normalize($txt), $border, $align, $fill);
		}

		function Cell($w, $h=0, $txt='', $border=0, $ln=0, $align='', $fill=false, $link='')
		{
			parent::Cell($w, $h, $this->normalize($txt), $border, $ln, $align, $fill, $link);
		}

		function Write($h, $txt, $link='')
		{
			parent::Write($h, $this->normalize($txt), $link);
		}

		function Text($x, $y, $txt)
		{
			parent::Text($x, $y, $this->normalize($txt));
		}

		protected function normalize($word)
		{
			// Thanks to: http://stackoverflow.com/questions/3514076/special-characters-in-fpdf-with-php
			
			$word = str_replace("@","%40",$word);
			$word = str_replace("`","%60",$word);
			$word = str_replace("¢","%A2",$word);
			$word = str_replace("£","%A3",$word);
			$word = str_replace("¥","%A5",$word);
			$word = str_replace("|","%A6",$word);
			$word = str_replace("«","%AB",$word);
			$word = str_replace("¬","%AC",$word);
			$word = str_replace("¯","%AD",$word);
			$word = str_replace("º","%B0",$word);
			$word = str_replace("±","%B1",$word);
			$word = str_replace("ª","%B2",$word);
			$word = str_replace("µ","%B5",$word);
			$word = str_replace("»","%BB",$word);
			$word = str_replace("¼","%BC",$word);
			$word = str_replace("½","%BD",$word);
			$word = str_replace("¿","%BF",$word);
			$word = str_replace("À","%C0",$word);
			$word = str_replace("Á","%C1",$word);
			$word = str_replace("Â","%C2",$word);
			$word = str_replace("Ã","%C3",$word);
			$word = str_replace("Ä","%C4",$word);
			$word = str_replace("Å","%C5",$word);
			$word = str_replace("Æ","%C6",$word);
			$word = str_replace("Ç","%C7",$word);
			$word = str_replace("È","%C8",$word);
			$word = str_replace("É","%C9",$word);
			$word = str_replace("Ê","%CA",$word);
			$word = str_replace("Ë","%CB",$word);
			$word = str_replace("Ì","%CC",$word);
			$word = str_replace("Í","%CD",$word);
			$word = str_replace("Î","%CE",$word);
			$word = str_replace("Ï","%CF",$word);
			$word = str_replace("Ð","%D0",$word);
			$word = str_replace("Ñ","%D1",$word);
			$word = str_replace("Ò","%D2",$word);
			$word = str_replace("Ó","%D3",$word);
			$word = str_replace("Ô","%D4",$word);
			$word = str_replace("Õ","%D5",$word);
			$word = str_replace("Ö","%D6",$word);
			$word = str_replace("Ø","%D8",$word);
			$word = str_replace("Ù","%D9",$word);
			$word = str_replace("Ú","%DA",$word);
			$word = str_replace("Û","%DB",$word);
			$word = str_replace("Ü","%DC",$word);
			$word = str_replace("Ý","%DD",$word);
			$word = str_replace("Þ","%DE",$word);
			$word = str_replace("ß","%DF",$word);
			$word = str_replace("à","%E0",$word);
			$word = str_replace("á","%E1",$word);
			$word = str_replace("â","%E2",$word);
			$word = str_replace("ã","%E3",$word);
			$word = str_replace("ä","%E4",$word);
			$word = str_replace("å","%E5",$word);
			$word = str_replace("æ","%E6",$word);
			$word = str_replace("ç","%E7",$word);
			$word = str_replace("è","%E8",$word);
			$word = str_replace("é","%E9",$word);
			$word = str_replace("ê","%EA",$word);
			$word = str_replace("ë","%EB",$word);
			$word = str_replace("ì","%EC",$word);
			$word = str_replace("í","%ED",$word);
			$word = str_replace("î","%EE",$word);
			$word = str_replace("ï","%EF",$word);
			$word = str_replace("ð","%F0",$word);
			$word = str_replace("ñ","%F1",$word);
			$word = str_replace("ò","%F2",$word);
			$word = str_replace("ó","%F3",$word);
			$word = str_replace("ô","%F4",$word);
			$word = str_replace("õ","%F5",$word);
			$word = str_replace("ö","%F6",$word);
			$word = str_replace("÷","%F7",$word);
			$word = str_replace("ø","%F8",$word);
			$word = str_replace("ù","%F9",$word);
			$word = str_replace("ú","%FA",$word);
			$word = str_replace("û","%FB",$word);
			$word = str_replace("ü","%FC",$word);
			$word = str_replace("ý","%FD",$word);
			$word = str_replace("þ","%FE",$word);
			$word = str_replace("ÿ","%FF",$word);

			return urldecode($word);
		}

	}
    

    $pdf = new TextNormalizerFPDF('P','mm','Letter');
    $pdf->AddPage();
    $pdf->Image('001.jpg', 0, 0, 210, 299);
    //$image1 = "/Certificado-main/fpdf185/001.png";
    //$fpdf->Image('image1', 0, 0, $fpdf->w, $fpdf->h);
    $pdf->SetFont('Arial','B',14);
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Cell(0,10,'LA FUNDACIÓN UNIVERSITARIA EMPRESARIAL DE',0,0,'C');
    $pdf->Ln();
    $pdf->Cell(0,10,'LA CÁMARA DE COMERCIO DE BOGOTÁ-UNIEMPRESARIAL-.',0,0,'C');
    $pdf->Ln();
    $pdf->SetFont('Arial','',11);
    $pdf->Cell(0,10,'Personería Jurídica, Resolución 598 del 2 de abril de 2001 del Ministerio de Educación',0,0,'C');
    $pdf->Ln();
    $pdf->Cell(0,10,' Nacional - Registro ICFES 2738',0,0,'C');
    $pdf->Ln();
    $pdf->SetFont('Arial','B',14);
    $pdf->Cell(0,10,'CERTIFICA',0,0,'C');
    $pdf->Ln();
    $pdf->SetFont('Arial','',11);
    $pdf->Cell(0,10,'Que el señor ___________, identificado con cédula de ciudadanía No. _________, está',);
    $pdf->Ln();
    $pdf->Cell(0,10,'vinculado con la Fundación Universitaria Empresarial de la Cámara de Comercio de Bogotá',);
    $pdf->Ln();
    $pdf->Cell(0,10,'Uniempresarial con NIT 830.084.876-6, desempeñando el cargo de');
    $pdf->SetFont('Arial','B',11);
    $pdf->Cell(-39,10,'DOCENTE HORA','0','0','R');
    $pdf->Cell(20,10,'CATEDRA','0','0','R');
    $pdf->SetFont('Arial','',11);
    $pdf->Ln();
    $pdf->Cell(0,10,'mediante contratos por obra o labor en los siguientes periodos:');
    $pdf->Ln();
    $pdf->Cell(0,10,'de octubre de 2022.');
    $pdf->Ln();
    $pdf->SetLeftMargin(28);
    $pdf->SetFont('Arial','',10);
    $pdf->Cell(50,5,'Fecha Inicio ',1,0,'C',0);
    $pdf->Cell(50,5,'Fecha Fin',1,0,'C',0);
    $pdf->Cell(50,5,'No. Contrato',1,0,'C',0);
    $pdf->Cell(40,5,'','L',1,);  // cell with left and right borders
    $pdf->Cell(50,5,'',1,0,'C',0);
    $pdf->Cell(50,5,'',1,0,'C',0);
    $pdf->Cell(50,5,'',1,0,'C',0);
    $pdf->Ln();
    $pdf->SetLeftMargin(10);
    $pdf->SetFont('Arial','',11);
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Cell(0,10,'El presente certificado se expide a solicitud del interesado a los veintiocho (28) días del mes de octubre de 2022.');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Cell(0,10,'Atentamente,');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->SetFont('Arial','B',12);
    $pdf->Cell(0,10,'LUZ YAZMÍN LIZARAZO JIMÉNEZ');
    $pdf->Ln();
    $pdf->SetFont('Arial','',12);
    $pdf->Cell(0,10,'Directora de Talento Humano');
    $pdf->Ln();
    $pdf->SetFont('Arial','',6);
    $pdf->Cell(0,10,'Proyectó: Nicol Valencia -Profesional en Nómina y ');
    $pdf->Ln();
    $pdf->Cell(0,10,'Contratación 202211028-347');
    $pdf->Output();
?>








