<?php
    //caracteres especiales
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
			$word = str_replace("Á","%C1",$word);
			$word = str_replace("É","%C9",$word);
			$word = str_replace("Í","%CD",$word);
			$word = str_replace("Ó","%D3",$word);
			$word = str_replace("á","%E1",$word);
			$word = str_replace("é","%E9",$word);
			$word = str_replace("í","%ED",$word);
			$word = str_replace("ó","%F3",$word);
			$word = str_replace("ñ","%F1",$word);
			return urldecode($word);
		}
	}
    //caracteristicas
    $pdf = new TextNormalizerFPDF('P','mm','Letter');
    $pdf->AddPage();
    $pdf->Image('001.jpg', 0, 0, 210, 280);
    $pdf->SetFont('Arial','B',14);
	$pdf->Cell(0,10,'.',0,0,'C');
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
    $pdf->Cell(0,10,'Que el señor@ ___________, identificad@ con cédula de ciudadanía No. _________, está vinculado con la',);
    $pdf->Ln();
    $pdf->Cell(0,10,'Fundación Universitaria Empresarial de la Cámara de Comercio de Bogotá Uniempresarial con NIT',);
    $pdf->Ln();
    $pdf->Cell(0,10,' 830.084.876-6, desempeñando el cargo de');
    $pdf->SetFont('Arial','B',11);
    $pdf->Cell(-80,10,'DOCENTE HORA','0','0','R');
    $pdf->Cell(20,10,'CATEDRA','0','0','R');
    $pdf->SetFont('Arial','',11);
    $pdf->Cell(0,10,'mediante contratos por obra ');
    $pdf->Ln();
    $pdf->Cell(0,10,'o labor en los siguientes periodos:');
    $pdf->Ln();
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
    $pdf->Cell(0,10,'El presente certificado se expide a solicitud del interesado a los días del mes de de .');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Cell(0,10,'Atentamente,');
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